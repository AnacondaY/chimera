export default function rangeOf(range: Number[]){
    return (props, propName, componentName) => {
        const value = props[propName];
        if(!Array.isArray(range)){
            throw new Error('Invalid range, range should be an array');
        }else{
            if(range.length !== 2){
                throw new Error('the length of range must be 2');
            }else{
                range.forEach((num, i) => {
                    if(typeof num !== 'number'){
                        throw new Error(`the index of prop range should be a number, but get ${typeof num}`);
                    }
                });
                if(range[0] > range[1]){
                    throw new Error(`the value of last item should be greater than the first item in prop ${propName}`);
                }
                if(value < range[0]){
                    throw new Error(`the prop ${propName} should be greater than ${range[0]}`);
                }
                if(value > range[1]){
                    throw new Error(`the prop ${propName} should be less than ${range[1]}`);
                }
            }
        }
    };
}