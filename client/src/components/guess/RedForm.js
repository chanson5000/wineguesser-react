import React, {Component} from 'react';
import FormGroup from '../common/FormGroup'
import RedWineFields from '../fields/RedWineFields';

class RedForm extends Component {
  render() {


    return (
        <div className="container text-center">
          <h2 className="p-2">Select red wine characteristics.</h2>
          <form>
            <FormGroup label="Color" name="color" selectionType="select"
                       selections={RedWineFields.color}/>

            <FormGroup label="Fruit Condition" name="condition" selectionType="checkbox"
                       selections={RedWineFields.condition}/>

            <FormGroup label="Fruit Type" name="fruit" selectionType="checkbox"
                       selections={RedWineFields.type}/>

            <FormGroup label="Non-Fruit" name="nonFruit" selectionType="checkbox"
                       selections={RedWineFields.nonFruit}/>

            <FormGroup label="Tannin" name="tannin" selectionType="select"
                       selections={RedWineFields.structure}/>

            <FormGroup label="Acidity" name="acidity" selectionType="select"
                       selections={RedWineFields.structure}/>

            <FormGroup label="Alcohol" name="alcohol" selectionType="select"
                       selections={RedWineFields.structure}/>

            <FormGroup label="Climate" name="climate" selectionType="select"
                       selections={RedWineFields.climate}/>

            <button type="submit" className="btn m-2">Guess</button>
          </form>
          </div>
    );
  }
}

export default RedForm;