/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['comfortaa, sans-serif']='<script src=\"http://use.edgefonts.net/comfortaa:n4,n3,n7:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['50%', '0%','50%','100%','auto', 'auto'],
                fill: ["rgba(140,0,84,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bg',
                type: 'rect',
                rect: ['auto', '27.6%','auto','auto','13.9%', 'auto']
            },
            {
                id: 'contenido',
                type: 'rect',
                rect: ['-100%', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['0px', '0px','50px','100%','auto', 'auto'],
                fill: ["rgba(68,68,68,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['0px', '0px','50px','50px','auto', 'auto'],
                fill: ["rgba(110,110,110,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['17px', '17px','15px','15','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle4',
                    type: 'rect',
                    rect: ['0px', '12px','15px','3px','auto', 'auto'],
                    borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy',
                    type: 'rect',
                    rect: ['0px', '6px','15px','3px','auto', 'auto'],
                    borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle4Copy2',
                    type: 'rect',
                    rect: ['0px', '0px','15px','3px','auto', 'auto'],
                    borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['0px', '50px','50px','148px','auto', 'auto'],
                text: "<br>E<br>m<br>p<br>r<br>e<br>s<br>a<br>s",
                align: "center",
                userClass: "menu",
                font: ['comfortaa, sans-serif', 12, "rgba(252,252,252,1.00)", "100", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['0px', '208px','50px','182px','auto', 'auto'],
                text: "<br>y<br>o<br>l<br>o<br>a<br>v<br>i<br>s<br>o<br>s<br>",
                align: "center",
                userClass: "menu",
                font: ['comfortaa, sans-serif', 12, "rgba(252,252,252,1.00)", "100", "none", ""]
            },
            {
                id: 'Rectangle6',
                type: 'rect',
                rect: ['0px', '208px','50px','1px','auto', 'auto'],
                fill: ["rgba(102,102,102,1.00)"],
                stroke: [0,"rgb(1, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'bg',
                symbolName: 'bg'
            },
            {
                id: 'contenido',
                symbolName: 'contenido'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(68,68,68,1.00)']
            ],
            "${_bg}": [
                ["style", "top", '27.45%'],
                ["style", "right", '50%'],
                ["style", "left", 'auto']
            ],
            "${_Rectangle4Copy2}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '15px']
            ],
            "${_contenido}": [
                ["style", "left", '-100%']
            ],
            "${_Rectangle6}": [
                ["color", "background-color", 'rgba(102,102,102,1.00)'],
                ["style", "height", '1px']
            ],
            "${_Group}": [
                ["style", "top", '17px'],
                ["style", "left", '17px'],
                ["style", "width", '15px']
            ],
            "${_Rectangle4Copy}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "top", '6px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '15px']
            ],
            "${_Text}": [
                ["style", "line-height", '15px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(252,252,252,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '0px'],
                ["style", "width", '50px'],
                ["style", "top", '50px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '148px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '12px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(110,110,110,1.00)'],
                ["style", "height", '50px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(225,225,225,1.00)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(203,203,203,1.00)'],
                ["style", "height", '100%'],
                ["style", "top", '0%'],
                ["style", "left", '50%'],
                ["style", "width", '50%']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "top", '12px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '15px']
            ],
            "${_TextCopy}": [
                ["style", "line-height", '15px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(252,252,252,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '0px'],
                ["style", "width", '50px'],
                ["style", "top", '208px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '182px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "style", "${_contenido}", "left", '0%', { fromValue: '-100%'}], position: 0, duration: 750 },
                { id: "eid22", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(203,203,203,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(203,203,203,1.00)'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_bg}", "right", '50%', { fromValue: '50%'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_bg}", "top", '31.09%', { fromValue: '27.45%'}], position: 0, duration: 750 }            ]
        }
    }
},
"contenido": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0px', '100%', '100%', 'auto', 'auto'],
                    stroke: [0, 'rgba(1,0,0,1.00)', 'none'],
                    id: 'Rectangle5',
                    opacity: 0.95,
                    type: 'rect',
                    fill: ['rgba(68,68,68,1)']
                },
                {
                    id: 'item',
                    type: 'rect',
                    rect: ['50', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'item',
                symbolName: 'item',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.95'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"item": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '99.9%', '100%', 'auto', 'auto'],
                    id: 'Rectangle7',
                    stroke: [0, 'rgba(191,188,188,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(27,77,25,1.00)']
                },
                {
                    rect: ['0px', '108px', '99.9%', '60px', 'auto', 'auto'],
                    font: ['comfortaa, sans-serif', [2, 'em'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal'],
                    id: 'Text2',
                    text: 'El Pueblo',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle7}": [
                ["color", "background-color", 'rgba(27,77,25,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "border-color", 'rgba(191,188,188,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '99.94%']
            ],
            "${_Text2}": [
                ["style", "top", '108px'],
                ["style", "width", '99.94%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '60px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '2em']
            ],
            "${symbolSelector}": [
                ["style", "height", '275px'],
                ["style", "width", '317px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"bg": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'newspaper_by_misteraibo-d6minna',
                    type: 'image',
                    rect: ['41.2%', '-12px', '1191px', '670px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/newspaper_by_misteraibo-d6minna.png', '0px', '0px']
                },
                {
                    id: 'pc',
                    type: 'image',
                    rect: ['110.2%', '-18px', '554px', '416px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pc.png', '0px', '0px']
                },
                {
                    rect: ['406px', '263px', '577px', '88px', 'auto', 'auto'],
                    font: ['comfortaa, sans-serif', [2, 'em'], 'rgba(81,81,81,1.00)', 'bold', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Descubre la nueva forma digital de colocar avisos en tus diarios físicos',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_newspaper_by_misteraibo-d6minna}": [
                ["style", "height", '202px'],
                ["style", "top", '0px'],
                ["style", "left", '41.15%'],
                ["style", "width", '359px']
            ],
            "${symbolSelector}": [
                ["style", "height", '208px'],
                ["style", "width", '695px']
            ],
            "${_Text3}": [
                ["style", "top", '263px'],
                ["color", "color", 'rgba(81,81,81,1.00)'],
                ["style", "left", '406px'],
                ["style", "height", '88px']
            ],
            "${_pc}": [
                ["style", "height", '202px'],
                ["style", "top", '6px'],
                ["style", "left", '110.22%'],
                ["style", "width", '269px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-707238604");
