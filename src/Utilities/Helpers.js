export class Helpers {
    static recordFromIndexedData(indexedData,key){

        if (this.isNull(indexedData)) {
            return [];
        }
        let record = null;
        if(indexedData.hasOwnProperty(key)){
            record = indexedData[key];
        }
        if (this.isNull(record)) {
            return [];
        }
        return record;

    }
    static isNull(variable) {
        return variable === undefined || variable === null;
    }

    static replaceSpaceWithHyphen(string){
        return string.replace(/\s+/g, '-').toLowerCase();
    }
}