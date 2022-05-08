import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import exampleCss from '!!raw-loader!./example.css';

const CodePenButton = React.memo(function _CodePenButton(props: {
    text: Promise<string>;
    title: string;
}) {
    const [text, setText] = React.useState('loading()');
    React.useEffect(() => {
        props.text.then((r) => {
            let m;
            const renames = [];
            let regex = /import .*\{([A-Za-z,\s\n]+)\}.* from '(.*)'/g;
            while ((m = regex.exec(r)) !== null) {
                const imports = m[1].replace(/\s/g, '').replace(/\n/g, '').split(',');
                const path = m[2]
                    .replace(/\//g, '.')
                    .replace(/react-bootstrap/g, 'ReactBootstrap')
                    .replace(/react/g, 'React');
                for (const i of imports) renames.push({from: i, to: `${path}.${i}`});
            }
            regex = /import ([A-Za-z]+) from '(ol.*)'/g;
            while ((m = regex.exec(r)) !== null) {
                const path = m[2]
                    .replace(/\//g, '.')
                    .replace(/react-bootstrap/g, 'ReactBootstrap')
                    .replace(/react/g, 'React');
                renames.push({from: m[1], to: path});
            }
            regex = /import ([A-Za-z]+) from '(.*\.svg)'/g;
            while ((m = regex.exec(r)) !== null) {
                const path = `'https://cdn.jsdelivr.net/npm/rlayers@1.3.4/examples/${m[2]}'`;
                renames.push({from: m[1], to: path});
            }
            r = r.replace(/import[^;]+;\n/g, '');
            r = r.replace(/^\n+/, '');
            r = r.replace(/export default function (.*)/, 'function Comp() {');
            r += "\nReactDOM.createRoot(document.getElementById('root')).render(<Comp />);\n";
            for (const m of renames)
                r = r.replace(
                    new RegExp('([^A-Za-z.])' + m.from + '\\b', 'g'),
                    (_, g1) => `${g1}${m.to}`
                );
            setText(r);
        });
    }, [props.text]);

    const ref = React.useRef<HTMLFormElement>();
    return (
        <form
            className='position-absolute my-2 mx-4'
            style={{top: '0px', right: '0px'}}
            ref={ref}
            action='https://codepen.io/pen/define'
            method='POST'
            target='_blank'
        >
            <input
                type='hidden'
                name='data'
                value={JSON.stringify({
                    title: 'react-edit-list ' + props.title,
                    html: '<div id="root"></div>',
                    js: text,
                    js_pre_processor: 'typescript',
                    css: exampleCss,
                    js_external:
                        'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js;' +
                        'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.development.min.js;' +
                        'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.development.min.js;' +
                        'https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js;' +
                        'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/build/ol.js;' +
                        'https://cdn.jsdelivr.net/npm/js-lru-cache@0.1.10/dist/lru-cache.min.js;' +
                        'https://pelikan.garga.net/cdn-bundle.js',
                    css_external:
                        'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/css/ol.css;' +
                        'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
                })}
            />
            <button
                className='btn border mb-2 bg-light'
                onClick={() => {
                    ref.current.submit();
                }}
            >
                <span className='me-2 align-middle'>Edit on</span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 138 26'
                    height='24px'
                    fill='none'
                    stroke='#000'
                    strokeWidth='2.3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path d='M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z' />
                </svg>
            </button>
        </form>
    );
});

export default CodePenButton;
