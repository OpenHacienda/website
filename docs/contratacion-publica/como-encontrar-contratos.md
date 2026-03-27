---
sidebar_position: 4
---

# Cómo encontrar contratos: PLACSP y otras fuentes

Todo contrato público en España debe publicarse. La obligación existe. Lo que no existe es un sistema diseñado para que esa información sea fácil de encontrar, comparar o analizar.

## La Plataforma de Contratación del Sector Público (PLACSP)

La PLACSP (`contrataciondelestado.es`) es el portal oficial donde las administraciones publican sus licitaciones. Es el punto de partida obligatorio.

:::info[URL]

[https://contrataciondelestado.es](https://contrataciondelestado.es)

:::

### Cómo buscar contratos de la AEAT

1. Accede al buscador de licitaciones.
2. En **Órgano de contratación**, escribe `Agencia Estatal de Administración Tributaria`.
3. Filtra por **Tipo de contrato**: "Servicios" o "Suministros" para encontrar contratos tecnológicos.
4. Filtra por **Estado**: "Adjudicado" para ver contratos ya resueltos con precio e importe final.

### Limitaciones del buscador

- La búsqueda de texto libre es frágil — el mismo contrato puede aparecer con nombres ligeramente distintos en distintos años.
- Los documentos adjuntos (pliegos, resoluciones) son PDFs sin OCR en muchos casos.
- Los contratos menores (< 15.000€ servicios, < 40.000€ obras) no tienen que publicarse individualmente — solo en un resumen trimestral que pocas administraciones publican con regularidad.
- Contratos anteriores a ~2012 tienen cobertura muy parcial.

## El DOUE para contratos grandes

Los contratos que superan los umbrales europeos deben publicarse también en el **Diario Oficial de la Unión Europea (DOUE)**. Estos umbrales para la Administración General del Estado son:

| Tipo | Umbral (2024-2025) |
|------|-------------------|
| Suministros y servicios | 143.000 € |
| Obras | 5.538.000 € |

:::tip

El DOUE tiene mejor búsqueda que PLACSP para contratos grandes. Busca en [ted.europa.eu](https://ted.europa.eu) con el nombre del organismo.

:::

## El BOE como fuente complementaria

Las adjudicaciones de contratos relevantes se publican en el BOE. El buscador del BOE (`boe.es`) permite filtrar por sección y organismo, pero la cobertura es irregular — no todos los contratos que deberían publicarse en BOE se publican.

## Herramientas de terceros

Algunas organizaciones procesan y reexponen los datos de PLACSP de forma más usable:

| Herramienta | Qué ofrece |
|-------------|-----------|
| [Contrataciones del Estado](https://contratacionesdelestado.es) | Procesamiento de datos de PLACSP con mejor búsqueda |
| [OpenTender](https://opentender.eu) | Datos europeos de licitación, incluye España |
| [Civio — ¿Dónde van mis impuestos?](https://dondevanmisimpuestos.es) | Análisis de gasto público, menos granular |

:::warning

Estas herramientas son mantenidas por terceros con recursos limitados. Los datos pueden estar desactualizados o incompletos.

:::

## Acceso directo a datos: el API de PLACSP

PLACSP expone un API de datos abiertos en formato Atom/XML. No es cómoda, pero permite automatizar la búsqueda de contratos por organismo:

```
https://contrataciondelestado.es/sindicacion/sindicacion_1044/licitacionesPerfilesContratanteCompleto3.atom
```

Los parámetros de filtrado están pobremente documentados. En la práctica, descargar el feed completo y filtrar localmente es más fiable que confiar en los parámetros de query.
