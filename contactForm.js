// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiCSnrswPFP7YxjBLBi_2o9dHao27QRhw",
  authDomain: "contactform-myportfolio.firebaseapp.com",
  databaseURL: "https://contactform-myportfolio-default-rtdb.firebaseio.com",
  projectId: "contactform-myportfolio",
  storageBucket: "contactform-myportfolio.appspot.com",
  messagingSenderId: "836553362424",
  appId: "1:836553362424:web:3b97780d3c4e37f0e7240d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener('submit', submitForm);

function submitForm (e) {   
    e.preventDefault();

    var name = getElementVal('name');
    var emailId = getElementVal('emailId');
    var messageContent = getElementVal('messageContent');

    // console.log(name, emailId, messageContent);
    saveMessages(name, emailId, messageContent);

    // enable alert message
    document.querySelector('.alert').style.display = "block"

    // remove alert message
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none"
        
        //reset form
        document.getElementById("contactForm").reset();
    }, 3000);
}

const saveMessages = (name, emailId, messageContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name,
        emailId,
        messageContent,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}