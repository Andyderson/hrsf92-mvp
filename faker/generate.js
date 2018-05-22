const faker = require('faker');
const fs = require('fs');

faker.locale = 'en_US';

const results = [];

for (let i = 0; i < 250; i++) {
  faker.seed(i);
  const allergy = {};
  allergy.id = i; // Allergy id in database
  allergy.name = faker.company.catchPhraseNoun(); // Allergy Name
  allergy.description = faker.lorem.paragraphs(); // Allergy Description
  allergy.url = faker.internet.url(); // URL leading to more information on allergy
  results.push(allergy);
}


const beeSting = {
  id: 1000,
  name: 'Bee sting',
  description: 'Bee stings are a common outdoor nuisance. In most cases, bee stings are just annoying, and home treatment is all that\'s necessary to ease the pain of bee stings. But if you\'re allergic to bee stings or you get stung numerous times, you may have a more-serious reaction that requires emergency treatment. You can take several steps to avoid bee stings — as well as hornet and wasp stings — and find out how to treat them if you do get stung.',
  url: 'https://www.mayoclinic.org/diseases-conditions/bee-stings/symptoms-causes/syc-20353869',
};

const peanutAllergy = {
  id: 1001,
  name: 'Peanut allergy',
  description: 'Peanut allergy is a type of food allergy to peanuts. It is different from tree nut allergies. Physical symptoms of allergic reaction can include itchiness, hives, swelling, eczema, sneezing, asthma, abdominal pain, drop in blood pressure, diarrhea, and cardiac arrest. Anaphylaxis may occur. It is due to a type I hypersensitivity reaction of the immune system in susceptible individuals. The allergy is recognized "as one of the most severe food allergies due to its prevalence, persistency, and potential severity of allergic reaction." Prevention may be partly achieved through early introduction of peanuts to the diets of pregnant women and babies. The principal treatment for anaphylaxis is epinephrine as an injection.',
  url: 'https://www.mayoclinic.org/diseases-conditions/peanut-allergy/symptoms-causes/syc-20376175',
};

const waspSting = {
  id: 1002,
  name: 'Wasp sting',
  description: 'Treating bee and wasp stings depends on their severity. The majority of problems that require medical attention come from an allergic reaction to the sting. In most cases, complications from that reaction respond well to medications -- when given in time.',
  url: 'https://www.webmd.com/first-aid/bee-and-wasp-stings-treatment#1',
};

const shellfishAllergy = {
  id: 1003,
  name: 'Shellfish allergy',
  description: 'Shellfish allergy is an abnormal response by the body\'s immune system to proteins in certain marine animals. Shellfish include marine animals with shells, such as shrimp, crab, oysters and lobster, as well as squid and scallops. Some people with shellfish allergy react to all shellfish; others react to only certain kinds. Reactions range from mild symptoms — such as hives or a stuffy nose — to severe and even life-threatening.If you think you have a shellfish allergy, talk to your doctor. Tests can help confirm the allergy so you can take steps to avoid future reactions.',
  url: 'https://www.mayoclinic.org/diseases-conditions/shellfish-allergy/symptoms-causes/syc-20377503',
};

const petAllergy = {
  id: 1004,
  name: 'Pet allergy',
  description: 'Pet allergy is an allergic reaction to proteins found in an animal\'s skin cells, saliva or urine. Signs of pet allergy include those common to hay fever, such as sneezing and runny nose. Some people may also experience signs of asthma, such as wheezing and difficulty breathing. Most often, pet allergy is triggered by exposure to the dead flakes of skin (dander) a pet sheds. Any animal with fur can be a source of pet allergy, but pet allergies are most commonly associated with cats and dogs.If you have a pet allergy, the best strategy is to avoid or reduce exposure to the animal as much as possible. Medications or other treatments may be necessary to relieve symptoms and manage asthma.',
  url: 'https://www.mayoclinic.org/diseases-conditions/pet-allergy/symptoms-causes/syc-20352192',
};

const alcoholIntolerance = {
  id: 1005,
  name: 'Alcohol intolerance',
  description: 'Alcohol intolerance can cause immediate, uncomfortable reactions after you drink alcohol. The most common signs and symptoms are stuffy nose and skin flushing. Alcohol intolerance is caused by a genetic condition in which the body can\'t break down alcohol efficiently. The only way to prevent these uncomfortable reactions is to avoid alcohol. Although not a true allergy, in some cases, what seems to be alcohol intolerance might be your reaction to something in an alcoholic beverage — such as chemicals, grains or preservatives. Combining alcohol with certain medications also can cause reactions.',
  url: 'https://www.mayoclinic.org/diseases-conditions/alcohol-intolerance/symptoms-causes/syc-20369211',
};

results.push(beeSting);
results.push(peanutAllergy);
results.push(waspSting);
results.push(shellfishAllergy);
results.push(petAllergy);
results.push(alcoholIntolerance);

fs.writeFile('../data.json', JSON.stringify(results), (error) => {
  if (error) {
    console.log('Generation Error', error);
  } else {
    console.log('Generation Successful!');
  }
});
