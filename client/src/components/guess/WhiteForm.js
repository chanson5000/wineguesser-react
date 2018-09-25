import React, {Component} from 'react';
import FormGroup from "../common/FormGroup";
import WhiteWineFields from '../fields/WhiteWineFields';

class WhiteForm extends Component {
  render() {
    return (
        <div className="container text-center">
          <h2 className="p-2">Select white wine characteristics.</h2>
          <form>
            <FormGroup label="Color" name="color" selectionType="select"
                       selections={WhiteWineFields.color}/>

            <FormGroup label="Fruit Condition" name="condition" selectionType="checkbox"
                       selections={WhiteWineFields.condition}/>

            <FormGroup label="Fruit Type" name="fruit" selectionType="checkbox"
                       selections={WhiteWineFields.type}/>

            <FormGroup label="Non-Fruit" name="nonFruit" selectionType="checkbox"
                       selections={WhiteWineFields.nonFruit}/>

            <FormGroup label="Sweetness" name="sweetness" selectionType="select"
                       selections={WhiteWineFields.sweetness}/>

            <FormGroup label="Acidity" name="acidity" selectionType="select"
                       selections={WhiteWineFields.structure}/>

            <FormGroup label="Alcohol" name="alcohol" selectionType="select"
                       selections={WhiteWineFields.structure}/>

            <FormGroup label="Climate" name="climate" selectionType="select"
                       selections={WhiteWineFields.climate}/>

            <button type="submit" className="btn m-2">Guess</button>
          </form>
        </div>
    );
  }
}

export default WhiteForm;