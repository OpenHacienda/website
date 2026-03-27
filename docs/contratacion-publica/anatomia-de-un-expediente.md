---
sidebar_position: 1
---

# Anatomía de un expediente de contratación

Un expediente de contratación pública tiene una estructura formal regulada por la **Ley de Contratos del Sector Público (LCSP, Ley 9/2017)**. Entender qué documento es cada cosa es el primer paso para poder analizar un contrato.

## Los documentos principales

### Pliego de Cláusulas Administrativas Particulares (PCAP)

El PCAP es el contrato en sí — las condiciones jurídicas, económicas y administrativas. Regula:

- El tipo de procedimiento (abierto, restringido, negociado, menor).
- Los criterios de adjudicación y su ponderación.
- Las garantías exigidas.
- El plazo de ejecución y las penalizaciones por incumplimiento.
- Las condiciones de subcontratación.

**Lo que hay que mirar:** Los criterios de adjudicación. Si el precio tiene un peso muy bajo (por ejemplo, 30%) y los criterios subjetivos ("calidad de la propuesta técnica") tienen un peso muy alto, el margen para la discrecionalidad en la evaluación es grande.

### Pliego de Prescripciones Técnicas (PPT)

El PPT describe qué hay que construir o mantener. Para contratos tecnológicos, incluye:

- Descripción del sistema o servicio.
- Requisitos funcionales y técnicos.
- Niveles de servicio (SLA) exigidos.
- Stack tecnológico obligatorio o recomendado.
- Volúmenes estimados (transacciones, usuarios, datos).

**Lo que hay que mirar:** Si el PPT describe con un nivel de detalle inusual una solución técnica concreta — herramientas específicas, arquitecturas particulares, integraciones con sistemas propietarios ya instalados — es posible que el pliego esté orientado hacia un proveedor que ya conoce el sistema.

### Memoria justificativa

Documento interno que justifica por qué se contrata, por qué con ese procedimiento y por qué con ese presupuesto. En teoría es público. En la práctica, con frecuencia se publica de forma incompleta o no se publica.

### Informe de necesidad

Justifica la necesidad del contrato. Suele ser un trámite formal más que un análisis real.

### Resolución de adjudicación

El documento que resuelve el concurso. Debe indicar:

- Empresa adjudicataria.
- Precio final de adjudicación.
- Puntuaciones de todas las ofertas evaluadas.
- En procedimientos con varios criterios, desglose de la puntuación por criterio.

**Lo que hay que mirar:** La diferencia entre el presupuesto base de licitación y el precio de adjudicación. Una baja muy pequeña (< 5%) puede indicar que había poca competencia real. Una baja muy grande puede indicar una oferta agresiva que luego se compensa con modificados.

---

## Tipos de procedimiento

La LCSP define varios procedimientos. Para contratos tecnológicos de la AEAT, los más relevantes son:

### Procedimiento abierto

El más transparente. Cualquier empresa puede presentar oferta. Obligatorio por encima de ciertos umbrales. Los criterios de adjudicación deben publicarse y respetarse.

### Procedimiento negociado sin publicidad

Se puede usar en casos excepcionales — urgencia, exclusividad técnica, continuación de un contrato anterior. **Es el procedimiento con menor visibilidad pública**, porque no requiere publicar la licitación y permite negociar directamente con uno o varios proveedores.

La LCSP limita su uso, pero la casuística de "exclusividad técnica" es suficientemente amplia para que se utilice con frecuencia.

### Contrato menor

Para importes pequeños (servicios: < 15.000€, obras: < 40.000€), no requiere procedimiento formal. El riesgo asociado es el **fraccionamiento artificial**: dividir un contrato grande en múltiples contratos menores para evitar la obligación de licitar. Está prohibido por la LCSP pero es difícil de detectar y probar.

### Acuerdo Marco

Un mecanismo que permite pre-seleccionar un conjunto de proveedores y luego adjudicar contratos concretos entre ellos sin un nuevo procedimiento abierto. Legítimo cuando se usa correctamente. Puede ser problemático cuando el acuerdo marco inicial tiene criterios de entrada que limitan significativamente el número de competidores posibles.

---

## Modificados: el contrato que crece después de adjudicarse

La LCSP permite modificar contratos en ejecución bajo condiciones estrictas. En la práctica, el **modificado** es uno de los mecanismos que puede utilizarse para:

- Ampliar el alcance de un contrato que se adjudicó con un precio bajo.
- Extender plazos de forma encadenada evitando una nueva licitación.
- Incorporar funcionalidad que debería haber estado en el contrato original.

La LCSP limita los modificados al 20% del precio de adjudicación, pero los contratos plurianuales complejos tienen suficiente margen para crecer significativamente.

:::warning

Un contrato adjudicado por 2M€ que acaba costando 3,5M€ tras varios modificados no es inusual en contratos tecnológicos de larga duración. Esos modificados no siempre se publican con la misma visibilidad que el contrato original.

:::
