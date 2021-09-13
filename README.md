# Covid-Vaccine-Survey
Create the a webpage using HTML, CSS and JS.
Validations :

- Name is a mandatory field and should contain only alphabets and must be at least 6 characters long. If not, display appropriate error message to the user adjacent to the field (on the right side)
- Gender is a mandatory field.
- Age is a mandatory numeric field which can accept only numbers from 18 to 60.
- Accept the vaccine preference using radio buttons. A user should be able to select one of the presented options.
- Once the user clicks on submit button, display the accepted details on the same page below the submit button.
- Apply appropriate CSS to make the page visually appealing.


On the server, create static Covishield.json and Covaxin.json files with the fields such as name, second dose duration, side effects, precautions, etc. For example, { "name": "Covishield", "seconddose": "28 days", "side effects": ["fever", "headache"], "precautions": [“Paracetamol for fever”,”consult doctor”] }
Ensure that these files can be accessed on the browser if a user types the appropriate URLs.
Modify the webpage created in Day 8 so that when the user clicks on Submit, an AJAX request for the appropriate file is made. The webpage should display the user details along with details from the data from the JSON file in a neatly formatted table.
