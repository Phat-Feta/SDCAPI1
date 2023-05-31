

const helpers = {
    transformAnswer: (answers) => {
        return (answers).reduce((a,v)=>({...a, [v.id]:v}), {});
    }
}

module.exports = helpers;