// import algoliasearch from 'algoliasearch/lite';
// import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
// import '@algolia/autocomplete-theme-classic';
// import autocompleteStyles from './newautocomplete.module.scss';
// import headerStyles from '../header.module.scss';
// import React, { createElement, Fragment, useEffect, useRef } from 'react';
// import { render } from 'react-dom';
// import useLocationSearch from '../../util/useLocationSearch';

// const searchClient = algoliasearch(
//     process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
//     process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
// );

// const singulars = {
//     blog: 'Blog',
//     'market-analysis': 'Market Analysis',
//     'customer-stories': 'Customer Story',
//     whitepapers: 'White Paper',
//     webcasts: 'Webcast',
//     podcasts: 'Podcast',
//     newsroom: 'Newsroom',
// };

// const pagesPlugin = {
//     getSources({ query, setContext }) {
//         return [
//             {
//                 sourceId: 'pages',
//                 getItems() {
//                     return getAlgoliaResults({
//                         searchClient,
//                         queries: [
//                             {
//                                 indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX,
//                                 query,
//                                 params: {
//                                     hitsPerPage: 6,
//                                 },
//                             },
//                         ],
//                         transformResponse({ results, hits }) {
//                             setContext({
//                                 nbPages: results[0].nbHits,
//                             });

//                             return hits;
//                         },
//                     });
//                 },
//                 getItemUrl({ item }) {
//                     const type =
//                         item.fields.content.fields.type !== undefined
//                             ? `resources/${item.fields.content.fields.type}/`
//                             : '';
//                     return `/${type}${item.fields.slug}`;
//                 },
//                 templates: {
//                     item({ item, html }) {
//                         const type =
//                             item.fields.content.fields.type !== undefined
//                                 ? `resources/${item.fields.content.fields.type}/`
//                                 : '';
//                         const url = `/${type}${item.fields.slug}`;
//                         return html`<div
//               className=${autocompleteStyles['aa-Item']}
//               data-url=${url}
//               onClick=${(e) => {
//                                 window.location.href = url;
//                             }}
//             >
//               <div>
//                 <p>
//                   ${item.fields.content.fields.type !== undefined
//                                 ? singulars[item.fields.content.fields.type]
//                                 : 'Page'}
//                 </p>
//                 <h2>${item.fields.name}</h2>
//                 <p>
//                   ${item.fields.content.fields.type !== undefined
//                                 ? item.fields.content.fields.shortDescription?.slice(
//                                     0,
//                                     50
//                                 ) + '...'
//                                 : ''}
//                 </p>
//               </div>
//             </div>`;
//                     },
//                     noResults() {
//                         return 'No results.';
//                     },
//                     footer({ html, state }) {
//                         if (state.context.nbPages <= 6) return ``;
//                         return html`<div className=${autocompleteStyles['aa-Footer']}>
//               <a href="/search?siteIndex%5Bquery%5D=${query}"
//                 >View all results</a
//               >
//             </div>`;
//                     },
//                 },
//             },
//         ];
//     },
// };

// export default function Autocomplete(props) {
//     const containerRef = useRef(null);
//     const containerRefFull = useRef(null);

//     const { setSearchActive } = props;
//     const { theme } = props;
//     const { locationSearch } = useLocationSearch();

//     useEffect(() => {

//         const container = containerRef.current;
//         const container1 = containerRef.current;

//         const observer = new MutationObserver(() => {
//             const submitBtn = containerRef?.current?.querySelector('.aa-SubmitButton');
//             if (submitBtn && !submitBtn.dataset.trackClickLabel) {
//                 submitBtn.dataset.trackClickLabel = 'globalnav1:search';
//             }
//             const submitBtn1 = containerRefFull?.current?.querySelector('.aa-SubmitButton');
//             if (submitBtn1 && !submitBtn1.dataset.trackClickLabel) {
//                 submitBtn1.dataset.trackClickLabel = 'globalnav1:search';
//             }
//         });

//         if (container) {
//             observer.observe(container, {
//                 childList: true,
//                 subtree: true,
//             });
//         }

//         if (container1) {
//             observer.observe(container1, {
//                 childList: true,
//                 subtree: true,
//             });
//         }

//         if (!props.fullWidth) {
//             if (!containerRef.current) {
//                 return undefined;
//             }



//             const search = autocomplete({
//                 container: containerRef.current,
//                 renderer: { createElement, Fragment, render },
//                 placeholder: 'Search',
//                 plugins: [pagesPlugin],
//                 detachedMediaQuery: false,
//                 classNames: {
//                     panel: `${autocompleteStyles['aa-Panel']}`,
//                     form: `${autocompleteStyles['aa-Form']} ${theme === 'dark' ? autocompleteStyles['darkBg'] : null
//                         }`,
//                     input: ` ${autocompleteStyles['extend']}`,
//                     submitButton: `${autocompleteStyles['aa-SubmitButton']}`,
//                     inputWrapper: `${autocompleteStyles['aa-InputWrapper']}`,
//                     inputWrapperPrefix: `${autocompleteStyles['aa-InputWrapperPrefix']}`,
//                     inputWrapperSuffix: `${autocompleteStyles['aa-InputWrapperSuffix']}`,
//                     detachedSearchButtonIcon: `${autocompleteStyles['aa-DetachedSearchButtonIcon']}`,
//                 },
//                 onRender() {
//                     const submitBtn =
//                         containerRefFull.current?.querySelector('.aa-SubmitButton');

//                     if (submitBtn && !submitBtn.dataset.trackClickLabel) {
//                         submitBtn.dataset.trackClickLabel = 'submit-search';
//                     }
//                 },
//             });


//             const searchFormSubmit = (searchInput) => {
//                 window.location =
//                     '/search?siteIndex%5Bquery%5D=' +
//                     searchInput.value +
//                     (locationSearch.search
//                         ? '&' + locationSearch.search.replace('?', '')
//                         : '');
//             };

//             const searchFormSubmitFromHeader = (searchInput) => {
//                 if (
//                     document.activeElement.tagName === 'INPUT' &&
//                     document.activeElement.classList.contains('aa-Input') &&
//                     searchInput.value !== ''
//                 ) {
//                     searchFormSubmit(searchInput);
//                 }
//             };

//             // Replace BUTTON with SPAN
//             // only for desktop, for mobile the generated code is different
//             if (document.querySelector('.aa-Label')) {
//                 const focusButton = document.createElement('span');
//                 focusButton.classList.add('aa-SubmitButton');
//                 focusButton.classList.add(autocompleteStyles['aa-SubmitButton']);
//                 focusButton.innerHTML = `<svg class="aa-SubmitIcon" viewBox="0 0 24 24" width="20" height="20" fill=${theme === 'dark' ? '#fff' : 'currentColor'
//                     }><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></svg>`;
//                 focusButton.addEventListener('click', (e) => {
//                     document.querySelector('.aa-Form').reset();
//                     setTimeout(() => searchInput.focus(), 0);
//                 });
//                 const searchForm = document.querySelector('.aa-Form');
//                 const searchInput = document.querySelector('.aa-Input');
//                 const submitButtonParent = document.querySelector('.aa-Label');
//                 submitButtonParent.classList.add(autocompleteStyles['aa-Label']);
//                 const submitButton = document.querySelector('.aa-SubmitButton');
//                 const inputWrapperPrefix = document.querySelector(
//                     '.aa-InputWrapperPrefix'
//                 );
//                 const inputWrapper = document.querySelector(
//                     '.aa-InputWrapper'
//                 );

//                 const mainNav = document.querySelector('.mainNav');

//                 searchForm.addEventListener(
//                     'submit',
//                     searchFormSubmit.bind(this, searchInput)
//                 );

//                 inputWrapperPrefix.addEventListener('click', (e) => {
//                     inputWrapperPrefix.classList.add(
//                         autocompleteStyles['aa-BorderBottom']
//                     );

//                     // if (mainNav) {
//                     //   mainNav.classList.add(headerStyles['hidden']);
//                     // }
//                 });

//                 // mbl input activate
//                 inputWrapper.addEventListener('click', (e) => {
//                     document.querySelector('.aa-Form').reset();
//                     setTimeout(() => searchInput.focus(), 0);
//                 });



//                 searchInput.addEventListener('focusout', (e) => {
//                     inputWrapperPrefix.classList.remove(
//                         autocompleteStyles['aa-BorderBottom']
//                     );

//                     if (mainNav) {
//                         mainNav.classList.remove(headerStyles['hidden']);
//                     }
//                 });

//                 if (submitButtonParent) {
//                     submitButtonParent.replaceChild(focusButton, submitButton);
//                 }
//             } else if (document.querySelector('.aa-DetachedOverlay')) {
//                 // Autocomplete mobile
//                 const searchForm = document
//                     .querySelector('.aa-DetachedOverlay')
//                     .querySelector('.aa-Form');
//                 const searchInput = document
//                     .querySelector('.aa-DetachedOverlay')
//                     .querySelector('.aa-Input');
//                 searchForm.addEventListener(
//                     'submit',
//                     searchFormSubmit.bind(this, searchInput)
//                 );
//             }

//             if (props.autoOpen) {
//                 const searchForm = document.querySelector('.aa-Form');
//                 const searchInput = document.querySelector('.aa-Input');
//                 const submitButton = document.querySelector('.aa-SubmitButton');

//                 submitButton.removeEventListener('click', searchFormSubmit);
//                 submitButton.removeEventListener('click', searchFormSubmitFromHeader);
//                 setTimeout(() => {
//                     // submitButton.click();
//                     if (document.activeElement === searchInput) {
//                         submitButton.addEventListener(
//                             'click',
//                             searchFormSubmitFromHeader.bind(this, searchInput)
//                         );
//                     }
//                 }, 0);
//             }

//             return () => {
//                 search.destroy();
//                 observer.disconnect();
//             };
//         } else {
//             setSearchActive(false);
//             if (!containerRefFull.current) {
//                 return undefined;
//             }

//             const search = autocomplete({
//                 container: containerRefFull.current,
//                 renderer: { createElement, Fragment, render },
//                 classNames: {
//                     panel: `${autocompleteStyles['aa-Panel']} ${autocompleteStyles['full-width']}`,
//                     form: `${autocompleteStyles['aa-Form']}`,
//                     submitButton: `${autocompleteStyles['aa-SubmitButton']}`,
//                     inputWrapper: `${autocompleteStyles['aa-InputWrapper']}`,
//                     inputWrapperPrefix: `${autocompleteStyles['aa-InputWrapperPrefix']}`,
//                     inputWrapperSuffix: `${autocompleteStyles['aa-InputWrapperSuffix']}`,
//                 },
//                 onRender() {
//                     const submitBtn = containerRefFull.current?.querySelector('.aa-SubmitButton');

//                     console.log('submitBtn:', submitBtn);

//                     if (submitBtn && !submitBtn.dataset.trackClickLabel) {
//                         submitBtn.dataset.trackClickLabel = 'submit-search';
//                     }
//                 },
//                 ...props,
//             });

//             return () => {
//                 search.destroy();
//                 observer.disconnect();
//             };
//         }
//     }, [props]);

//     if (props.fullWidth)
//         return (
//             <div ref={containerRefFull} className={autocompleteStyles.autocomplete} />
//         );
//     else {
//         return (
//             <div ref={containerRef} className={autocompleteStyles.autocomplete} />
//         );
//     }
// }
