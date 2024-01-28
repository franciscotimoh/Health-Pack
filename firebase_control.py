import json

import firebase_admin
from firebase_admin import credentials, db

def setup():
    #Connecting to firebase db
    cred_obj = credentials.Certificate(r'.\health-pack-cf941-firebase-adminsdk-q1fxd-9e2b9547b6.json')
    databaseURL = 'https://health-pack-cf941-default-rtdb.firebaseio.com/'
    default_app = firebase_admin.initialize_app(cred_obj, {
        'databaseURL':databaseURL
        })
    return default_app

def write_to_db(file_string: str, db_ref = '/'):
    #Get db reference
    ref = db.reference(db_ref)

    #Open json file
    with open(file_string, 'r') as file:
        file_contents = json.load(file)
    
    #Push values from json file to database
    for key, value in file_contents.items():
        ref.push().set(value)


def get_from_db(order_by: str, db_ref = '/'):
    #Get db reference
    ref = db.reference(db_ref)

    result = ref.order_by_child(order_by).get()
    
    return result

if __name__ == '__main__':
    default_app = setup()
    # ref = db.reference('/')
    # ref.set({
    #         "Users":
    #         {}
    #         })
    write_to_db('dummy_data.json', db_ref=r'Users')
    result_dict = get_from_db("ID", db_ref=r'Users')

    print(result_dict)
    print('Success?')
