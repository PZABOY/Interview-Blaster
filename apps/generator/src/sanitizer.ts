class Sanitizer {

    public sanitizerJsonArray(str: string): object[] {

        const start = str.indexOf("[");
        const end = str.lastIndexOf("]");
        const json = str.substring(start, end + 1);
        const arr = JSON.parse(json);
        return arr;
    }

}

export const sanitizer = new Sanitizer();