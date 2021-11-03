const fs = require('fs');
const path = require('path');

function listContacts() {
  fs.readFile(path.resolve('./db/contacts.json'), 'utf8', (error, data) => {
    if (error) {
      console.log('ooops........');
    }
    const contactsList = JSON.parse(data);
    console.log(contactsList);
    return contactsList;
  });
}

function getContactById(contactId) {
  fs.readFile(path.resolve('./db/contacts.json'), 'utf8', (error, data) => {
    if (error) {
      console.log('ooops........');
    }
    const contactsList = JSON.parse(data);
    console.log(contactsList.find((item) => item.id === Number(contactId)));
    return contactsList.find((item) => item.id === Number(contactId));
  });
}

function removeContact(contactId) {
  fs.readFile(path.resolve('./db/contacts.json'), 'utf8', (error, data) => {
    if (error) {
      return console.log('Something goes wrong........');
    }

    const json = JSON.parse(data);

    const list = json.filter((item) => {
      return item.id !== Number(contactId);
    });

    fs.writeFile(
      './db/contacts.json',
      `${JSON.stringify(list)}`,
      function (error) {
        if (error) {
          console.log('oops......');
        }
        console.log(list);
        console.log('works');
      }
    );
  });
}

function addContact(name, email, phone) {
  const newContact = { name: name, email: email, phone: phone };

  fs.readFile(path.resolve('./db/contacts.json'), 'utf8', (error, data) => {
    if (error) {
      return console.log('Something goes wrong........');
    }
    const json = JSON.parse(data);

    json.push(newContact);

    fs.writeFile(
      './db/contacts.json',
      `${JSON.stringify(json)}`,
      function (error) {
        if (error) {
          console.log('oops......');
        }
        console.log('must working');
        console.log(json);
      }
    );
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
