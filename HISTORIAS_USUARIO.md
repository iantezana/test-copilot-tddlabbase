# Historias de Usuario - Game of Life

## Historia 1: Crear un tablero básico
**Como** desarrollador  
**Quiero** crear un tablero vacío de dimensiones específicas  
**Para** tener la base donde simular el Game of Life  

### Criterios de aceptación:
- El tablero debe tener el ancho y alto especificados
- Todas las células deben estar inicialmente "muertas" (valor 0)
- Debe ser posible obtener el tablero completo

---

## Historia 2: Manipular células individuales
**Como** usuario  
**Quiero** poder activar y desactivar células individuales  
**Para** configurar el estado inicial del juego  

### Criterios de aceptación:
- Debe poder establecer una célula como viva (1) o muerta (0)
- Debe poder consultar el estado de una célula específica
- Las coordenadas deben ser válidas (dentro del tablero)

---

## Historia 3: Contar vecinos
**Como** sistema  
**Quiero** contar los vecinos vivos de una célula  
**Para** aplicar las reglas del Game of Life  

### Criterios de aceptación:
- Debe contar los 8 vecinos adyacentes (horizontal, vertical, diagonal)
- Debe manejar correctamente los bordes del tablero
- Debe retornar el número correcto de vecinos vivos

---

## Historia 4: Regla de supervivencia
**Como** sistema  
**Quiero** que las células vivas sobrevivan con 2 o 3 vecinos  
**Para** simular la regla básica de supervivencia  

### Criterios de aceptación:
- Célula viva con 2 vecinos → sobrevive
- Célula viva con 3 vecinos → sobrevive
- Célula viva con menos de 2 vecinos → muere
- Célula viva con más de 3 vecinos → muere

---

## Historia 5: Regla de nacimiento
**Como** sistema  
**Quiero** que las células muertas nazcan con exactamente 3 vecinos  
**Para** completar las reglas del Game of Life  

### Criterios de aceptación:
- Célula muerta con exactamente 3 vecinos → nace
- Célula muerta con cualquier otro número → sigue muerta

---

## Historia 6: Evolución completa
**Como** sistema  
**Quiero** calcular la siguiente generación aplicando todas las reglas  
**Para** simular la evolución del Game of Life  

### Criterios de aceptación:
- Debe aplicar las reglas a todas las células simultáneamente
- El tablero debe actualizarse con la nueva generación
- Los cambios deben basarse en el estado previo completo

---

## Historia 7: Patrones conocidos
**Como** desarrollador  
**Quiero** verificar que los patrones conocidos funcionen correctamente  
**Para** validar que la implementación es correcta  

### Criterios de aceptación:
- Patrón "Block" (2x2) debe mantenerse estático
- Patrón "Blinker" debe oscilar entre dos estados
- Los patrones deben comportarse según las reglas matemáticas conocidas
