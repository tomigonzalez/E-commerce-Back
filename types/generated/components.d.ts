import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultEnvio extends Struct.ComponentSchema {
  collectionName: 'components_default_envios';
  info: {
    displayName: 'envio';
  };
  attributes: {
    ciudad: Schema.Attribute.Text;
    codigoPostal: Schema.Attribute.String;
    direccion: Schema.Attribute.Text;
    pais: Schema.Attribute.Text;
    precio: Schema.Attribute.Decimal;
    provincia: Schema.Attribute.String;
    servicio: Schema.Attribute.Text;
    transportista: Schema.Attribute.String;
  };
}

export interface DefaultProductoPedido extends Struct.ComponentSchema {
  collectionName: 'components_default_producto_pedidos';
  info: {
    description: '';
    displayName: 'producto_pedido';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    product_id: Schema.Attribute.String & Schema.Attribute.DefaultTo<'1'>;
    quantity: Schema.Attribute.Integer;
    talle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DefaultSizeStock extends Struct.ComponentSchema {
  collectionName: 'components_default_size_stocks';
  info: {
    description: '';
    displayName: 'SizeStock';
  };
  attributes: {
    size: Schema.Attribute.Enumeration<
      ['XS', 'S', 'M', 'UNICO', 'L', 'XL', 'XXL', 'XXXL']
    > &
      Schema.Attribute.Required;
    stock: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface HomePageTextosDelCarrusel extends Struct.ComponentSchema {
  collectionName: 'components_home_page_textos_del_carrusels';
  info: {
    displayName: 'TextosDelCarrusel';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface InfoPageInfoContacto extends Struct.ComponentSchema {
  collectionName: 'components_info_page_info_contactos';
  info: {
    displayName: 'InfoContacto';
  };
  attributes: {
    direccion: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    google_maps_url: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    telefono: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface InfoPageInfoDevolucion extends Struct.ComponentSchema {
  collectionName: 'components_info_page_info_devolucions';
  info: {
    displayName: 'InfoDevolucion';
  };
  attributes: {
    textDesc: Schema.Attribute.Text;
    titleText: Schema.Attribute.String;
  };
}

export interface InfoPageInfoPoliticaPrivacidad extends Struct.ComponentSchema {
  collectionName: 'components_info_page_info_politica_privacidads';
  info: {
    displayName: 'infoPoliticaPrivacidad';
  };
  attributes: {
    direccion: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    nombreTienda: Schema.Attribute.String;
    sitioWeb: Schema.Attribute.String;
  };
}

export interface InfoPageInfoSobreNosotros extends Struct.ComponentSchema {
  collectionName: 'components_info_page_info_sobre_nosotros';
  info: {
    description: '';
    displayName: 'infoSobreNosotros';
  };
  attributes: {
    textDesc: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.envio': DefaultEnvio;
      'default.producto-pedido': DefaultProductoPedido;
      'default.size-stock': DefaultSizeStock;
      'home-page.textos-del-carrusel': HomePageTextosDelCarrusel;
      'info-page.info-contacto': InfoPageInfoContacto;
      'info-page.info-devolucion': InfoPageInfoDevolucion;
      'info-page.info-politica-privacidad': InfoPageInfoPoliticaPrivacidad;
      'info-page.info-sobre-nosotros': InfoPageInfoSobreNosotros;
    }
  }
}
