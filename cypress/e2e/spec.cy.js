import { selectablePage } from "../pageObjects/selectablePage";

describe('DemoQA', () => {
  context("Practice", () => { 

    it('Practice', () => {
      
      selectablePage.visit();

      // Ievades
      selectablePage.enterFirstName.type("Alekss");
      selectablePage.enterLastName.type("Grecuhins");
      selectablePage.enterUserEmail.type("alekssnana@gmail.com");
      selectablePage.checkRadioButton("Male").check({force: true});
      selectablePage.enterPhoneNr.type("2820521028");

      // kalendārs
      selectablePage.clickdateOfBirthInput.click();
      selectablePage.selectMonth.select(2); 
      selectablePage.selectYear.select('1930'); 
      selectablePage.selectDay.click(28); 
      // Priekšmets
      selectablePage.selectSubject.type("Economics{enter}");

      // Hobijs
      selectablePage.selectMusicCheckbox("hobbies-checkbox-3").check({force: true});

      // Bilde
      selectablePage.uploadImg;

      // Adrese
      selectablePage.writeAdress.type("upes 2a");

      // Datu izvēle
      selectablePage.selectState.type("NCR{enter}");
      selectablePage.selectCity.type("Delhi{enter}{enter}");

      // Pārbaude
      selectablePage.tbodyRowToTest;
      
    })
  });
})