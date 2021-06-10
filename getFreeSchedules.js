class Schedule {
    constructor ( diasem, horainicio, numhoras ){
        this.diasem = diasem;
        this.horainicio = horainicio;
        this.numhoras = numhoras;
    }
};

let getFreeSchedules = ( schedules )=>{
    let freeSchedules = []

    // Separa horarios de acordo com o dia da semana
    let weekDaySchedules = schedules.reduce( 
        (weekDaySchedules, schedule) => {
            weekDaySchedules[schedule.diasem].push(schedule)
            return weekDaySchedules;
        }, [ [], [], [], [], [], [], [] ]
    );

    // Itera pelos dias 7 dias da semana, adicionando os horarios livres
    for(let i = 0; i<7; i++){
        // Adciona um horario livre que começa na hora 0
        let freeSchedule = new Schedule(i,0,0)
        freeSchedules.push(freeSchedule);
        
        // itera por todos os horarios ocupados do dia da semana 'i'
        for(let j = 0; j<weekDaySchedules[i].length; j++) {
            // define a duração do ultimo horario livre adicionado como a diferença entre a hora de inicio do horario ocupado 'j' e do inicio do ultimo horario livre adicionado
            freeSchedule.numhoras = weekDaySchedules[i][j].horainicio-freeSchedule.horainicio;
            // adiciona um novo horario livre com começo igual a hora de término do horario ocupado 'j'
            freeSchedule = new Schedule( i, weekDaySchedules[i][j].horainicio + weekDaySchedules[i][j].numhoras, 0 );
            freeSchedules.push( freeSchedule );
        }

        // define a duração do ultimo horario livre adicionado como a diferença entre o termino do dia e da hora de inicio do ultimo horario livre adicionado
        freeSchedule.numhoras = 24 - freeSchedule.horainicio;
    }
    return freeSchedules.filter( schedule => schedule.numhoras );
}

console.log( getFreeSchedules(
    [   new Schedule(2,10,1), 
        new Schedule(2,13,5),
        new Schedule(3,13,5),
        new Schedule(5,11,5),
        new Schedule(6,15,5),
    ]));