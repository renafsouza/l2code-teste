select SALA.codpredio, SALA.numsala, diasem, horainicio, numhoras from SALA 
INNER JOIN HORARIO 
ON  
    SALA.codpredio = HORARIO.codpredio 
AND 
    SALA.numsala = HORARIO.numsala