YUI.add("datatype-xml-format",function(B){var A=B.Lang;B.mix(B.namespace("DataType.XML"),{format:function(C){try{if(!A.isUndefined(XMLSerializer)){return(new XMLSerializer()).serializeToString(C);}}catch(D){if(C.xml){return C.xml;}else{return C.toString();}}}});},"@VERSION@");