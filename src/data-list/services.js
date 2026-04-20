import {
    Contable,
    Administrativo,
    Legal,
    Marketing,
    Informatico,
    Inmobiliario
} from "../assets";

export const servicesData = [
    {
        slug: "contable",
        title: "Servicio Contable",
        description: "Nuestros servicios aseguran a las organizaciones el acceso a información completa, oportuna y bajo los principios de contabilida.",
        detailsIntro: "Garantizamos orden financiero, cumplimiento tributario y soporte continu.",
        features: [
            "Registro de operaciones (compras, ventas, ingresos, gastos)",
            "Elaboración y presentación de Libros electrónicos ante SUNAT",
            "Declaraciones tributarias (IGV, Renta, detracciones, PLAME)",
            "Declaración anual (estados financieros e Impuesto a la Renta)",
            "Asesoría permanente y orientación tributaria",
            "Atención y acompañamiento en Fiscalizaciones SUNAT",
            "Reportes gerenciales e indicadores financieros",
            "Optimización tributaria dentro del marco legal"
        ],
        image: Contable
    },
    {
        slug: "administrativo",
        title: "Servicio Administrativo",
        description: "Brindamos soporte administrativo integral para que su empresa opere con orden, eficiencia y cumplimiento normativ.",
        detailsIntro: "Contamos con el soporte necesario para integrar y controlar los procesos administrativo.",
        features: [
            "Elaboración, organización y archivo de gestión documental",
            "Trámites ante entidades (SUNAT, SUNARP, municipalidades)",
            "Control de proveedores, seguimiento de pagos y contratos",
            "Soporte en atención al cliente y coordinación",
            "Implementación de procesos y organización interna",
            "Seguimiento de licencias, permisos y obligaciones corporativas",
            "Coordinación con áreas contables, tributarias y laborales"
        ],
        image: Administrativo
    },
    {
        slug: "legal",
        title: "Servicio Legal",
        description: "Ofrecemos asesoría y representación legal especializada para proteger su empresa y garantizar el cumplimiento normativ.",
        detailsIntro: "Brindamos respaldo jurídico integral a nivel corporativo, representando sus intereses con ética profesiona.",
        features: [
            "Asesoría legal permanente (civil, laboral, penal, comercial)",
            "Elaboración y revisión de contratos y documentos legales",
            "Representación y defensa en procesos judiciales",
            "Gestión y defensa en procedimientos administrativos",
            "Constitución de empresas y modificaciones societarias",
            "Solución de conflictos y conciliación extrajudicial",
            "Trámites notariales y seguimiento ante SUNARP"
        ],
        image: Legal
    },
    {
        slug: "marketing",
        title: "Servicio de Marketing",
        description: "Diseñamos y ejecutamos estrategias orientadas a atraer más clientes y posicionar su marca de manera profesiona.",
        detailsIntro: "Impulsamos el crecimiento de su marca mediante estrategias personalizadas y un retorno de inversión rea.",
        features: [
            "Diagnóstico del negocio, mercado y competencia",
            "Planificación de estrategias y canales de comunicación",
            "Gestión estratégica de redes sociales orientada a resultados",
            "Publicidad digital (Ads) en plataformas Meta y Google",
            "Fortalecimiento de imagen corporativa, diseño y branding",
            "Medición de resultados y optimización continua de campañas"
        ],
        image: Marketing
    },
    {
        slug: "informatico",
        title: "Servicio Informático",
        description: "Gestionamos y optimizamos la infraestructura tecnológica para garantizar continuidad operativa y segurida.",
        detailsIntro: "Implementamos y mantenemos sistemas robustos que aseguran la continuidad de sus operacione.",
        features: [
            "Soporte técnico empresarial rápido ante fallas en equipos",
            "Administración de computadoras, servidores y redes",
            "Mantenimiento preventivo y correctivo de incidencias",
            "Protección de datos, antivirus y seguridad de la información",
            "Copias de seguridad, respaldo y recuperación de información",
            "Soporte de sistemas contables y facturación electrónica",
            "Asesoría en digitalización de la empresa"
        ],
        image: Informatico
    },
    {
        slug: "inmobiliario",
        title: "Servicio Inmobiliario",
        description: "Brindamos asesoría integral en gestión inmobiliaria para facilitar la compra, venta y administración de propiedade].",
        detailsIntro: "Le acompañamos en todo el proceso asegurando la rentabilidad de su inversión mediante análisis comerciale].",
        features: [
            "Asesoría en compra y venta de inmuebles]",
            "Gestión de alquiler, contratos y evaluación de inquilinos]",
            "Análisis y valorización comercial de propiedades]",
            "Revisión de títulos, partidas registrales y trámites notariales]",
            "Soporte legal en contratos, transferencias y saneamiento]",
            "Administración operativa, pagos y mantenimiento de inmuebles]",
            "Orientación estratégica para inversión inmobiliaria]"
        ],
        image: Inmobiliario
    }
];