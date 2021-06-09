select codprof, sum(numhoras) as "horas comprometidas" from HORARIO 
INNER JOIN PROFTURMA 
ON  
    PROFTURMA.numdisc = HORARIO.numdisc 
AND 
    PROFTURMA.coddepto = HORARIO.coddepto 
AND 
    PROFTURMA.anosem = HORARIO.anosem 
AND 
    PROFTURMA.siglatur = HORARIO.siglatur;
group by codprof