import os
import csv
import uuid
from shutil import copyfile
from collections import OrderedDict

if os.name == 'nt':
    system = 'Windows'
else:
    system = 'Unix'


def return_content_from_file(photolist):
    with open(photolist) as f:
        # read file line-by-line into a list
        content = f.readlines()
        # remove whitespace characters like `\n` at the end of each line
        content = [x.strip() for x in content]
    return content


"""
For data structure
C:/data/year/run/photo.ext
"""


# photo_list =         IN UNIX:     find .pdf /home/laptop/data > photo-list-unix.txt


def by_selecting_a_sample_photo_from_each_run(photo_list):
    # select sample photo from run
    with open(photo_list, 'rb') as csvfile:
        reader = csv.reader(csvfile, delimiter='/', quotechar='|')
        # *** this takes list of directories not photos! ***
        year_row_pairs = []
        samples = []
        csv_list = []
        for row in reader:
            list = row[0:-1]
            file_path = os.path.join(*list)
            year_row_pairs.append(file_path)
        year_row_pairs = set(year_row_pairs)
        
        for path in year_row_pairs:
            guid = str(uuid.uuid4())
            print(path)
            print(guid)
            if (system == 'Windows'):
                path = path.replace('\\','\\').replace(':',':\\')
                pdf_found = os.listdir(path)[0]
                csv_list.append(os.path.join(path, pdf_found) + ', ' + path.split('\\')[-2] + ', ' + path.split('\\')[-1] + ', ' + guid + '\n')
            else:
                pdf_found = os.listdir('/' + path)[0]
                csv_list.append(os.path.join(path, pdf_found) + ', ' + path.split('/')[-2] + ', ' + path.split('/')[-1] + ', ' + guid + '\n')
        cwd = os.getcwd()
        try:
            file = open(os.path.join(cwd,'photo-sample.csv'), 'r+')
        except IOError:
            file = open(os.path.join(cwd,'photo-sample.csv'), 'w+')
        file.writelines(csv_list)
        file.close()

def by_moving_and_renaming_photos_for_crowd_sourcing_site(photo_samples, target_location):
    photos = return_content_from_file(photo_samples)
    for photo in photos:
        if (system == 'Windows'):
            source = photo.split(",")[0]
            guid = photo.split(",")[3].strip(' ')
            target = os.path.join(target_location, guid, '.pdf').replace('\\.pdf','.pdf')
        else:
            source = '/' + photo.split(",")[0]
            guid = photo.split(",")[3].strip(' ')
            target = os.path.join(target_location, guid, '.pdf').replace('/.pdf','.pdf')
        # move file
        print source
        print target
        copyfile(source, target)


def by_recreating_the_html_site(template_js, validated_photos, photo_samples, base_url):
    js = open(template_js).read()
    all_photos = open(photo_samples).readlines()
    validated_photos = open(validated_photos).readlines()

    validated_guids = []
    all_guids = []
    guids_to_do = []

    for photo in validated_photos:
        messy_guid = photo.strip('\n').split(',')[0]
        clean_guid = messy_guid.strip('.jpg').strip('.jpeg').split('/')[-1:][0]
        validated_guids.append(clean_guid)
    
    for photo in all_photos:
        guid = photo.strip('\n').split(', ')[-1:][0]
        all_guids.append(guid)
    
    validated_guids = list(OrderedDict.fromkeys(validated_guids))
    all_guids = list(OrderedDict.fromkeys(all_guids))
    
    for guid in all_guids:
        if guid not in validated_guids:
            guids_to_do.append(guid)
    
    script = ''
    counter = 0
    for photo in guids_to_do:
        script = script + 'img['+str(counter)+'] = "' + base_url + photo + '.jpg";\n'
        counter = counter + 1

    js = js.replace('FIND', script)
    cwd = os.getcwd()
    try:
        file = open(os.path.join(cwd,'code.js'), 'w+')
    except IOError:
        file = open(os.path.join(cwd,'code.js'), 'w+')
    file.writelines(js)
    file.close()

def by_recreating_photo_csv(validated_photos, validated_photos_location):
    f_obj = open(validated_photos, 'r')
    validated_photos_list = f_obj.readlines()
    f_obj.close()
    validated_photo_files = os.listdir(validated_photos_location)
    cwd = os.getcwd()
    filepath = os.path.join(cwd, r'prepare', r'validated-photos')
    for csv_file in validated_photo_files:
        data = open(os.path.join(filepath, csv_file), 'r').readlines()
        for line in data:
            validated_photos_list.append(line)
    clean_photo_list = []
    photo_list = return_content_from_file(validated_photos)
    # extract guids of vlaidated photos
    for photo in photo_list:
        clean_photo_list.append(photo.split(',')[0].replace('.jpg','').split('/')[-1:][0])
    # remove duplicates and order list
    clean_photo_list = list(OrderedDict.fromkeys(clean_photo_list))
    unique_guids = []
    for validated_guid in clean_photo_list:
        for url in validated_photos_list:
            if ((validated_guid in url) and (url not in unique_guids)):
                unique_guids.append(url)
    try:
        file = open(validated_photos, 'w+')
    except IOError:
        file = open(validated_photos, 'w+')
    file.writelines(unique_guids)
    file.close()

def by_joining_run_to_flight_orientation_info(validated_photos, photo_samples):
    orientation = return_content_from_file(validated_photos)
    runs = return_content_from_file(photo_samples)
    orientation_data = []
    run_data = []
    joined_data = []

    for run in orientation:
        guid = run.replace(' ', '').split(',')[0].replace('.jpg', '').split('/')[-1:][0]
        orientation = run.replace(' ', '').split(',')[1]
        orientation_data.append([guid, orientation])
    
    for run in runs:
        year = run.replace(' ', '').split(',')[1]
        run_no = run.replace(' ', '').split(',')[2]
        guid = run.replace(' ', '').split(',')[3]
        run_data.append([guid, year, run_no])

    for o_data in orientation_data:
        for r_data in run_data:
            if (o_data[0] == r_data[0]):
                orient_plus_run_data = o_data + r_data
                # Remove duplicate guids
                orient_plus_run_data = list(OrderedDict.fromkeys(orient_plus_run_data))
                if (orient_plus_run_data not in joined_data):
                    joined_data.append(orient_plus_run_data)
    csv = ''
    for run in joined_data:
        orientation = run[1]
        year = run[2]
        flight_run = run[3]
        csv += '' + year + ', ' + flight_run + ', ' + orientation + '\n'
    
    cwd = os.getcwd()
    try:
        file = open(os.path.join(cwd,'run-orientation.csv'), 'w+')
    except IOError:
        file = open(os.path.join(cwd,'run-orientation.csv'), 'w+')
    file.writelines(csv)
    file.close()

# Unix
#photo_list = '/home/laptop/Desktop/prepare/photo-list-unix.txt'
#photo_samples = '/home/laptop/Desktop/prepare/photo-sample.csv'
#output_location = '/home/laptop/Desktop/prepare/samples'
#target_location = '/home/laptop/Desktop/prepare/samples'
#template_js = '/home/laptop/Desktop/prepare/code-template.js'
#validated_photos = '/home/laptop/Desktop/prepare/photos.csv'

# Windows
photo_list = 'E:\sandbox\Historic-Aerial-Photography-Processing-System\prepare\photo-list-win.txt'
photo_samples = 'E:\sandbox\Historic-Aerial-Photography-Processing-System\prepare\photo-sample.csv'
output_location = 'E:\sandbox\Historic-Aerial-Photography-Processing-System\prepare\samples'
target_location = 'E:\sandbox\Historic-Aerial-Photography-Processing-System\prepare\samples'
template_js = 'E:\sandbox\Historic-Aerial-Photography-Processing-System\prepare\code-template.js'
validated_photos = 'E:\sandbox\Historic-Aerial-Photography-Processing-System\prepare\photos.csv'
validated_photos_location = r'E:\sandbox\Historic-Aerial-Photography-Processing-System\prepare\validated-photos'

base_url = 'http://dev.actmapi.act.gov.au/images/run-sample/'

#by_selecting_a_sample_photo_from_each_run(photo_list)

#by_moving_and_renaming_photos_for_crowd_sourcing_site(photo_samples, target_location)

#by_recreating_photo_csv(validated_photos, validated_photos_location)

#by_recreating_the_html_site(template_js, validated_photos, photo_samples, base_url)

by_joining_run_to_flight_orientation_info(validated_photos, photo_samples)



