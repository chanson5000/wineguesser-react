import React, {Component} from 'react';
import FormGroup from "../common/FormGroup";

class WhiteForm extends Component {
  render() {
    return (
        <div className="container text-center">
          <h2 className="p-2">Select white wine characteristics.</h2>
          <form>
            <FormGroup label="Color" name="color" selectionType="select"
                       selections={{
                         'straw': 'Straw',
                         'yellow': 'Yellow',
                         'gold': 'Gold'
                       }}/>

            <FormGroup label="Fruit Condition" name="condition" selectionType="checkbox"
                       selections={{
                         'tart': 'Tart',
                         'ripe': 'Ripe',
                         'overripe': 'Overripe',
                         'baked': 'Baked, Dried'
                       }}/>

            <FormGroup label="Fruit Type" name="fruit" selectionType="checkbox"
                       selections={{
                         'applePear': 'Apple/Pear',
                         'citrus': 'Citrus',
                         'stone': 'Stone/Pit',
                         'tropical': 'Tropical'
                       }}/>

            <FormGroup label="Non-Fruit" name="nonFruit" selectionType="checkbox"
                       selections={{
                         'fruitBlossoms': 'Fruit blossoms: Orange, orchard, apple, and citrus',
                         'redFlowers': 'Red flowers: Rose, lilac, potpourri, lavender',
                         'hay': 'Stems, hay, yellow and white flowers',
                         'herbalFresh': 'Fresh herbs: Lemongrass, tarragon, chive, cilantro',
                         'chive': 'Chive, cilantro',
                         'herbalDried': 'Dried, savory herbs',
                         'herbalSage': 'Herbal: Sage, mint, eucalyptus, pine',
                         'herbalTea': 'Herbal: Tea',
                         'vegetalPyrazine': 'Pyrazine: Bell pepper, jalepeno',
                         'spice': 'Spice: Allspice, cardamom, clove, ginger, vanilla',
                         'terpene': 'Terpene: Petrol, rubber',
                         'wax': 'Wax, lanolin, cheese rind',
                         'soap': 'Soap, musk',
                         'oysterShell': 'Oyster shell, saline, schist',
                         'botrytis': 'Botrytis: Honey, beeswax, marmalade',
                         'oxidative': 'Oxidative, nutty',
                         'lees': 'Lees: Buttery, creamy',
                         'organic': 'Wet leaves, mushrooms',
                         'inorganic': 'Inorganic earth: Stone, rock, mineral, sulfur',
                         'newOak': 'New oak: Vanilla, brown baking spices, smoke',
                         'bitter': 'Bitter, phenolic'
                       }}/>

            <FormGroup label="Sweetness" name="sweetness" selectionType="select"
                       selections={{
                         'dry': 'Dry',
                         'offDry': 'Off-dry',
                         'sweet': 'Sweet',
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

export default WhiteForm;