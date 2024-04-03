class Alumno{
    constructor(username, edad, DNI)
    {
        this.username= username;
        this.edad=edad;
        this.DNI=DNI;
    }
    ToString() {
        return {
            username: this.username,
            edad: this.edad,
            DNI: this.DNI
        };
    }
}

export {Alumno, ToString};
