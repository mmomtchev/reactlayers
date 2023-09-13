"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[3178],{3178:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const t='<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> fromLonLat <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/proj"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> GeoJSON <span class="token keyword">from</span> <span class="token string">"ol/format/GeoJSON"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createEmpty<span class="token punctuation">,</span> extend<span class="token punctuation">,</span> getHeight<span class="token punctuation">,</span> getWidth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/extent"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"ol/ol.css"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This example illustrates the versatility of a dynamic RStyle</span>\n<span class="token comment">// It also makes use of its caching abilities</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> RMap<span class="token punctuation">,</span> RLayerCluster <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"rlayers"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  RStyle<span class="token punctuation">,</span>\n  RFill<span class="token punctuation">,</span>\n  RStroke<span class="token punctuation">,</span>\n  RRegularShape<span class="token punctuation">,</span>\n  RCircle<span class="token punctuation">,</span>\n  RText<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"rlayers/style"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> RLayerStadia <span class="token keyword">from</span> <span class="token string">"rlayers/layer/RLayerStadia"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Earthquakes of magnitude of at least 3.0 in 2020 (courtesy of USGS)</span>\n<span class="token comment">// (this won\'t work in CodePen)</span>\n<span class="token keyword">import</span> earthquakes <span class="token keyword">from</span> <span class="token string">"!!file-loader!./data/earthquakes.geojson"</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name">InputFormEventType</span> <span class="token operator">=</span> React<span class="token punctuation">.</span>FormEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">{</span> featureProjection<span class="token operator">:</span> <span class="token string">"EPSG:3857"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">colorBlob</span> <span class="token operator">=</span> <span class="token punctuation">(</span>size<span class="token punctuation">)</span> <span class="token operator">=></span>\n  <span class="token string">"rgba("</span> <span class="token operator">+</span>\n  <span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.4</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>size <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>\n  <span class="token string">")"</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">radiusStar</span> <span class="token operator">=</span> <span class="token punctuation">(</span>feature<span class="token punctuation">)</span> <span class="token operator">=></span>\n  Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"mag"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This returns the north/south east/west extent of a group of features</span>\n<span class="token comment">// divided by the resolution</span>\n<span class="token keyword">const</span> <span class="token function-variable function">extentFeatures</span> <span class="token operator">=</span> <span class="token punctuation">(</span>features<span class="token punctuation">,</span> resolution<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> extent <span class="token operator">=</span> <span class="token function">createEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> f <span class="token keyword">of</span> features<span class="token punctuation">)</span> <span class="token function">extend</span><span class="token punctuation">(</span>extent<span class="token punctuation">,</span> f<span class="token punctuation">.</span><span class="token function">getGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">0.25</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token function">getWidth</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getHeight</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> resolution<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Cluster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>distance<span class="token punctuation">,</span> setDistance<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>selected<span class="token punctuation">,</span> setSelected<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>\n    <span class="token string">"Click a cluster for details"</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> earthquakeLayer <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RMap</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example-map<span class="token punctuation">"</span></span>\n        <span class="token attr-name">initial</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> center<span class="token operator">:</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> zoom<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerStadia</span></span> <span class="token attr-name">layer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toner<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerCluster</span></span>\n          <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>earthquakeLayer<span class="token punctuation">}</span></span>\n          <span class="token attr-name">distance</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>distance<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reader<span class="token punctuation">}</span></span>\n          <span class="token attr-name">url</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>earthquakes<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> features <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"features"</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token function">setSelected</span><span class="token punctuation">(</span>\n              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>features<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> earthquakes in this location, </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>\n                <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">magnitudes are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>features\n                  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>eq<span class="token punctuation">)</span> <span class="token operator">=></span> eq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"mag"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span><span class="token plain-text">\n          &lt;RStyle\n            cacheSize=</span><span class="token punctuation">{</span><span class="token number">1024</span><span class="token punctuation">}</span><span class="token plain-text">\n            cacheId=</span><span class="token punctuation">{</span><span class="token function">useCallback</span><span class="token punctuation">(</span>\n              <span class="token punctuation">(</span>feature<span class="token punctuation">,</span> resolution<span class="token punctuation">)</span> <span class="token operator">=></span>\n                <span class="token comment">// This is the hashing function, it takes a feature as its input</span>\n                <span class="token comment">// and returns a string</span>\n                <span class="token comment">// It must be dependant of the same inputs as the rendering function</span>\n                feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"features"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span>\n                  <span class="token operator">?</span> <span class="token string">"#"</span> <span class="token operator">+</span> <span class="token function">extentFeatures</span><span class="token punctuation">(</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"features"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> resolution<span class="token punctuation">)</span>\n                  <span class="token operator">:</span> <span class="token string">"$"</span> <span class="token operator">+</span> <span class="token function">radiusStar</span><span class="token punctuation">(</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"features"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              <span class="token punctuation">[</span><span class="token punctuation">]</span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n            render=</span><span class="token punctuation">{</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> resolution<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n              <span class="token comment">// This is the rendering function</span>\n              <span class="token comment">// It has access to the cluster which appears as a single feature</span>\n              <span class="token comment">// and has a property with an array of all the features that make it</span>\n              <span class="token keyword">const</span> size <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"features"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n              <span class="token comment">// This is the size (number of features) of the cluster</span>\n              <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">// Render a blob with a number</span>\n                <span class="token keyword">const</span> radius <span class="token operator">=</span> <span class="token function">extentFeatures</span><span class="token punctuation">(</span>\n                  feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"features"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                  resolution\n                <span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">return</span> <span class="token punctuation">(</span>\n                  <span class="token comment">// A dynamic style should return a fragment instead of a</span>\n                  <span class="token comment">// full-blown RStyle - returning a full RStyle here</span>\n                  <span class="token comment">// will simply replace the style used by the vector layer</span>\n                  <span class="token comment">// with a fixed one</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RCircle</span></span> <span class="token attr-name">radius</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>radius<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RFill</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">colorBlob</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RCircle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RText</span></span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RFill</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStroke</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgba(0, 0, 0, 0.6)<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RText</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span>\n                <span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span>\n              <span class="token comment">// We have a single feature cluster</span>\n              <span class="token keyword">const</span> unclusteredFeature <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"features"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n              <span class="token comment">// Render a star</span>\n              <span class="token keyword">return</span> <span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RRegularShape</span></span>\n                  <span class="token attr-name">radius1</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">radiusStar</span><span class="token punctuation">(</span>unclusteredFeature<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">radius2</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">points</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">angle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">}</span></span>\n                <span class="token punctuation">></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RFill</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgba(255, 153, 0, 0.8)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStroke</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgba(255, 204, 0, 0.2)<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RRegularShape</span></span><span class="token punctuation">></span></span>\n              <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n          />\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RLayerCluster</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RMap</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-3 w-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>distance<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Clustering distance</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range-slider range-slider--primary w-100<span class="token punctuation">"</span></span>\n            <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>\n            <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span>\n            <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>distance<span class="token punctuation">"</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>distance<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">useCallback</span><span class="token punctuation">(</span>\n              <span class="token punctuation">(</span>e<span class="token operator">:</span> InputFormEventType<span class="token punctuation">)</span> <span class="token operator">=></span>\n                <span class="token function">setDistance</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              <span class="token punctuation">[</span><span class="token punctuation">]</span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>selected<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}]);