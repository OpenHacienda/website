---
sidebar_position: 1
---

# Cómo construye software la administración

Esto no es una crítica a las personas que trabajan en la AEAT o en cualquier otra administración. Es una descripción de las condiciones estructurales en las que operan.

## Modelos de contratación que desincentivan la calidad

La mayoría del software de la administración pública española se construye mediante **concursos públicos adjudicados al precio más bajo**. El resultado predecible es:

- Equipos sobredimensionados en papel, infradimensionados en la práctica.
- Rotación altísima — el conocimiento se va con cada cambio de contrata.
- Presupuesto para construir, ninguno para mantener.
- Documentación escrita para cumplir un entregable contractual, no para ser usada.

El pliego técnico puede exigir "documentación completa del sistema". Lo que nadie especifica es que esa documentación tiene que ser útil.

## La cultura del PDF

La administración española tiene una relación muy especial con el PDF. No el PDF como formato de distribución de un documento ya terminado — sino el PDF como **formato nativo de toda comunicación técnica**.

Esto significa:
- Especificaciones de APIs publicadas como documentos Word exportados a PDF.
- Esquemas XSD embebidos en PDFs no seleccionables.
- Notas de versión que solo existen en el registro oficial del BOE.
- URLs que apuntan a documentos que desaparecen sin redirección.

La web semántica, los formatos abiertos y el versionado de documentación son conceptos que la administración ha adoptado de forma muy parcial.

## Silos organizativos

La AEAT no es un monolito. Tiene departamentos que construyen sistemas de forma independiente, con estándares distintos, calendarios distintos y, a veces, con decisiones de diseño mutuamente incompatibles.

El resultado es que:
- SII usa SOAP con WS-Security.
- VERI\*FACTU usa un modelo distinto de firma y envío.
- Cl@ve tiene su propia infraestructura de identidad.
- La Sede Electrónica tiene otros endpoints y otra lógica de autenticación.

No hay una API unificada. No hay un portal de desarrolladores. No hay sandbox con datos de prueba realistas. Cada sistema hay que aprenderlo desde cero.

## El problema de la estabilidad

Una de las pocas cosas que la administración hace bien es **no romper cosas que funcionan**. Los sistemas de la AEAT tienden a ser estables durante años. Pero esa misma estabilidad produce:

- APIs diseñadas hace 15 años que no han evolucionado.
- Formatos XML verbosos y redundantes que ningún equipo moderno diseñaría hoy.
- Dependencias de tecnologías obsoletas (Java 6-era SOAP stacks, algoritmos de firma con soporte parcial en librerías modernas).
- Comportamiento no documentado que lleva tanto tiempo siendo así que nadie recuerda si era intencional.
