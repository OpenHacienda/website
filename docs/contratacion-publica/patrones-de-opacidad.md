---
sidebar_position: 2
---

# Patrones de opacidad habituales

A continuación, patrones que se observan con frecuencia en la contratación pública tecnológica española.

## Pliegos orientados a un proveedor

Un pliego técnico redactado de forma tan específica que, en la práctica, limita significativamente quién puede competir.

Las señales habituales:

- Requisitos que describen exactamente la arquitectura del sistema actual, incluyendo versiones concretas de software propietario ya instalado.
- Exigencia de experiencia en tecnologías muy específicas con umbrales de años poco habituales.
- Requisitos de personal que describen perfiles que solo existen en la empresa que actualmente mantiene el sistema.
- Plazos de licitación mínimos (en procedimientos donde la ley permite más tiempo) que dejan poco margen para que un competidor nuevo prepare una oferta real.

:::note

No todo pliego muy específico es un pliego orientado. Sistemas críticos en producción tienen requisitos técnicos legítimamente exigentes. La diferencia está en si esos requisitos están justificados por el objeto del contrato o si parecen limitar innecesariamente la competencia.

:::

## El informe de exclusividad técnica

El procedimiento negociado sin publicidad puede usarse cuando "la prestación solo puede ser encomendada a un empresario determinado por razones técnicas" (art. 168 LCSP). Esto cubre casos reales — patentes, derechos exclusivos, especificidades técnicas genuinas.

También puede utilizarse argumentando que el conocimiento acumulado del sistema es en sí mismo una exclusividad técnica. El informe que acredita esta exclusividad lo elabora la propia administración contratante.

Esos informes son públicos en teoría. En la práctica, no siempre se publican en PLACSP y cuando se publican rara vez tienen suficiente detalle técnico para poder ser analizados externamente.

## Fraccionamiento de contratos

Dividir un contrato que supera el umbral de contrato menor en varios contratos menores para evitar la obligación de licitar. Está explícitamente prohibido por la LCSP (art. 99.2).

Es difícil de detectar sin analizar el agregado de contratos menores de un mismo organismo con un mismo proveedor durante un período. Esa información existe en PLACSP pero requiere trabajo para extraerla y cruzarla.

## Modificados encadenados

Un contrato se adjudica a un precio que parece competitivo. Durante la ejecución, se aprueban sucesivos modificados que amplían el alcance, el plazo o el importe. Cada modificado individual puede mantenerse dentro del límite legal del 20%, pero el efecto acumulado puede duplicar el coste original.

Los modificados se publican en PLACSP pero con frecuencia tienen mucha menos visibilidad que la licitación original. Un análisis real del coste de un sistema requiere sumar contrato base + todos los modificados + eventuales prórrogas.

## Criterios de adjudicación subjetivos sin documentación de evaluación

La LCSP permite que parte de la puntuación se asigne mediante criterios de juicio de valor — calidad técnica de la propuesta, metodología, plan de trabajo. Esto es razonable: no todo se puede reducir a precio.

El problema surge cuando:

1. El peso de estos criterios subjetivos es muy alto (60-70% de la puntuación).
2. El acta del comité de evaluación no se publica, o se publica con una descripción tan genérica que no permite entender por qué cada oferta recibió la puntuación que recibió.
3. Los licitadores que pierden tienen dificultad para ejercer un recurso efectivo.

## Prórrogas indefinidas

La LCSP limita la duración total de los contratos de servicios, incluyendo prórrogas, a 5 años en general. En la práctica, hay contratos tecnológicos que llevan más de una década con el mismo proveedor a través de sucesivas renovaciones formalmente independientes pero funcionalmente continuas.

Cada nueva licitación se presenta como un concurso abierto. Pero cuando el objeto del contrato es "continuar el mantenimiento evolutivo del sistema X" y solo quien ya mantiene el sistema X puede presentar una oferta técnicamente creíble, la apertura formal del concurso tiene un valor limitado.

## Transparencia asimétrica: lo que se publica y lo que no

| Se publica (habitualmente) | Raramente se publica |
|---------------------------|---------------------|
| Convocatoria de licitación | Memoria justificativa completa |
| PCAP y PPT | Informes de exclusividad técnica |
| Resolución de adjudicación | Actas detalladas de evaluación |
| Importe de adjudicación | Detalle de modificados menores |
| Prórrogas formales | Costes reales acumulados |

---

## Cómo ejercer el derecho de acceso a la información

La **Ley de Transparencia (Ley 19/2013)** da derecho a solicitar información pública que no esté publicada. Para contratación, esto incluye:

- Memorias justificativas de contratos concretos.
- Actas de mesas de contratación y comités de evaluación.
- Informes técnicos que justifican exclusividades.

Las solicitudes se tramitan a través del **Portal de Transparencia** (`transparencia.gob.es`) o directamente ante el organismo contratante.

:::warning[Plazos y denegaciones]

El plazo legal de respuesta es de un mes, prorrogable a dos. Las denegaciones parciales o totales son habituales, especialmente cuando la información solicitada podría considerarse sensible. El **Consejo de Transparencia y Buen Gobierno (CTBG)** puede resolver reclamaciones, aunque sus resoluciones no siempre se cumplen con celeridad.

:::
