class User {
    constructor(usn) {
        this.username = usn;
        this.gender = "";
        this.school_year = "";
        this.working_time = "";
        this.courses = [];
        this.hobby = [];
        this.extra_note = ""
        
        this.post_time = 0;
    }
   
    setProperty (prop, val){
        this[prop] = val;
        return this;
    }

    getProperty(prop){
        return this[prop];
    }
}
module.exports= User