const contacts = require('../data/contacts');

const list = (req, res) => {
    res.json(contacts)
};

const show = (req, res) => {
    const contactId = req.params.id
    for (let contact of contacts){
        if (contact._id === parseInt(contactId)){
            res.json(contact)
        }
    }
};

const create = (req, res) => {
    const newContact = {
      _id: contacts.length + 1,
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar
    }
    
    if(!newContact.name || !newContact.occupation || !newContact.avatar){
      return res.status(400).json({ msg: "Please include name, occupation, and avatar link" });
    }
  
    contacts.push(newContact)
    res.json(contacts)
};

module.exports = {
  list,
  show,
  create
};