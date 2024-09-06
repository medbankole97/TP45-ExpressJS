export default class Assignation{

    createAssignation(assiger){
        this.employe = assiger.employe;
        this.tache = assiger.tache;
        this.dateAssignation = assiger.dateAssignation
    }

    getAssignation() {
        return {
            employe: this.employe,
            tache: this.tache,
            dateAssignation: this.dateAssignation
        }
    }
    tacheEmploye(){
        
    }

}