import React, {Component} from 'react';
import FormGroup from '../common/FormGroup';

class RedForm extends Component {
  render() {
    return (
        <div className="container text-center">
          <h2 className="p-2">Select red wine characteristics.</h2>
          <form>
            <FormGroup label="Color" name="color" selectionType="select"
                       selections={{
                         'garnet': 'Garnet',
                         'ruby': 'Ruby',
                         'purple': 'Purple'
                       }}/>

            <FormGroup label="Fruit Condition" name="condition" selectionType="checkbox"
                       selections={{
                         'tart': 'Tart',
                         'ripe': 'Ripe',
                         'overripe': 'Overripe',
                         'baked': 'Bake, Dried'
                       }}/>

            <FormGroup label="Fruit Type" name="fruit" selectionType="checkbox"
                       selections={{
                         'red': 'Red',
                         'black': 'Black',
                         'blue': 'Blue'
                       }}/>

            <FormGroup label="Non-Fruit" name="nonFruit" selectionType="checkbox"
                       selections={{
                         'floral': 'Floral',
                         'vegetalPyrazine': 'Vegetal: pyrazine (bell pepper, jalepeno)',
                         'vegetalTomato': 'Vegetal: tomato leaf',
                         'herbalTobacco': 'Herbal: Tobacco',
                         'herbalMint': 'Herbal: Mint, eucalyptus',
                         'herbalThyme': 'Herbal: Thyme, rosemary',
                         'herbalTea': 'Herbal: Tea',
                         'herbalOregano': 'Herbal: Oregano, basil',
                         'herbalDried': 'Herbal: Dried',
                         'spicePepper': 'Spice: Black pepper, peppercorn',
                         'spiceAnise': 'Spice: Anise, licorice',
                         'spiceOther': 'Spice: Other',
                         'coffee': 'Coffee',
                         'cocoa': 'Cocoa, chocolate, mocha',
                         'game': 'Game, blood, cured meat, leather',
                         'smoke': 'Smoke',
                         'balsamic': 'Balsamic, tar',
                         'carbonicMaceration': 'Carbonic maceration',
                         'volatileAcidity': 'Volatile acidity',
                         'oxidization': 'Oxidization',
                         'organic': 'Organic earth: Forest floor, wet leaves, mushrooms',
                         'inorganic': 'Inorganic earth: Stone, rock, mineral, sulfur',
                         'newOak': 'New oak: Vanilla, smoke, toast, coconut'
                       }}/>

            <FormGroup label="Tannin" name="tannin" selectionType="select"
                       selections={{
                         'moderateMinus': 'Moderate Minus',
                         'moderate': 'Moderate',
                         'moderatePlus': 'Moderate Plus',
                         'high': 'High'
                       }}/>

            <FormGroup label="Acidity" name="acidity" selectionType="select"
                       selections={{
                         'moderateMinus': 'Moderate Minus',
                         'moderate': 'Moderate',
                         'moderatePlus': 'Moderate Plus',
                         'high': 'High'
                       }}/>

            <FormGroup label="Alcohol" name="alcohol" selectionType="select"
                       selections={{
                         'moderateMinus': 'Moderate Minus',
                         'moderate': 'Moderate',
                         'moderatePlus': 'Moderate Plus',
                         'high': 'High'
                       }}/>

            <FormGroup label="Climate" name="climate" selectionType="select"
                       selections={{
                         'cool': 'Cool',
                         'moderate': 'Moderate',
                         'warm': 'Warm'
                       }}/>

            <button type="submit" className="btn m-2">Guess</button>
          </form>
          </div>
    );
  }
}

export default RedForm;