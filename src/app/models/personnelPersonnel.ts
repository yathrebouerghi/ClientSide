export class PersonnelPersonnel{
    codeEtab!:string;
    anneScol!:string;
    idenUniq!:number;
    idenUniqMatrCnss!:string;
    nomPren!:string;
    codeGenr!:string;
    dateNais!:Date;
    lieuNais!:string;
    numeCin!:string;
    dateCin!:Date

    codeNiveEtud!:string
    codeDipl!:string
    codeSituFami!:string

    adrePers!:string
    codePost!:string

    codeDele!:string
    codeGrad!:string
    codeQual!:string
    codeFonc!:string
    anci!:string
    codeCorp!:string
    spec!:boolean
    elig!:boolean
    codeReveMens!:string
    compInfo!:string
    codeSituProf!:string
    telGsm!:string
    email!:string
    structureAttache!:string
    daterecrutement!:Date
    dateaffectation!:Date
    daterespons!:Date
    notePead!:string
    datenotePead!: Date
    anotePead!:string
    adatenotePead!:string
    
    //codeDeleNavigation : NomenclatureDelegation()
    //codeDiplNavigation : NomenclatureDiplome
    //codeGenrNavigation : NomenclatureGenre
    //codeNiveEtudNavigation : NomenclatureNiveauEtude
}