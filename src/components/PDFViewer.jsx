// import React from 'react';
// import { Worker, Viewer, SpecialZoomLevel, defaultLayoutPlugin } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// // import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import path from 'path';
// import pdf from '../assets/others/eee.pdf';

// export default function PDFViewer() {

//     const defaultLayoutPluginInstance = defaultLayoutPlugin();

//     return (
//         <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
//             <div
//                 style={{
//                     border: '1px solid rgba(0, 0, 0, 0.3)',
//                     height: '750px',
//                 }}
//             >
//                 <Viewer
//                     fileUrl="../assets/others/eee.pdf"
//                     defaultScale={SpecialZoomLevel.PageFit}
//                     plugins={[
//                         defaultLayoutPluginInstance,
//                     ]} />;
//             </div>
//         </Worker>
//     );
// }

// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// export default function PDFViewer() {


//     const defaultLayoutPluginInstance = defaultLayoutPlugin();

//     return (
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
//             <div style={{ height: '750px' }}>
//                 <Viewer
//                     fileUrl="/pdf-open-parameters.pdf"
//                     plugins={[
//                         defaultLayoutPluginInstance,
//                     ]}
//                 />
//             </div>
//         </Worker>
//     );
// }

import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer fileUrl="../assets/others/power.pdf" plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>
    );
};

export default PDFViewer;