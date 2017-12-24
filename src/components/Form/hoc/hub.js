import Validator from 'validate-promisify';

export default class Hub {

    constructor(schema: Object, options: Object = {}){
        const { model } = options;
        this.validator = new Validator(schema);
        this.model = model || {};
        this.listeners = [];
    }   

    subscribe(fn: Function): Function{
        this.listeners.push(fn);
        return () => {
            const index = this.listeners.indexOf(fn);
            this.listeners.splice(index, 1);
        };
    }
    
    validateForm(): Promise{
        return this.validator.validate(this.model);
    }

    validateField(name: String): Promise {
        return this.validator.validate(this.model, { fields: [name] });
    }

    updateFieldValue(name: String, value: mixed){
        
    }

    execute(){
        this.listeners.forEach(fn => fn());
    }

}

function createHub(model: Object){
    if(!(this instanceof Hub)){
        return new Hub(model);
    }
}