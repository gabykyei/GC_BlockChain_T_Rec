// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.files');
goog.require('cljs.core');
/**
 * Takes file upload event and returns the (first) file uploaded
 */
sawtooth.files.upload__GT_file = (function sawtooth$files$upload__GT_file(e){
return (e.target.files[(0)]);
});
/**
 * Asynchonously reads a text file sends the content to a callback
 */
sawtooth.files.file__GT_string = (function sawtooth$files$file__GT_string(file,cb){
var reader = (new FileReader());
reader.onload = ((function (reader){
return (function (e){
return cb.call(null,e.target.result);
});})(reader))
;

return reader.readAsText(file);
});
sawtooth.files.upload__GT_string = (function sawtooth$files$upload__GT_string(e,cb){

return sawtooth.files.file__GT_string.call(null,sawtooth.files.upload__GT_file.call(null,e),cb);
});
/**
 * Builds a text file out of a string and sets it to a URL.
 *   Cleans up after itself by destroying an old url if passed.
 */
sawtooth.files.text_file_url_BANG_ = (function sawtooth$files$text_file_url_BANG_(var_args){
var args11192 = [];
var len__7157__auto___11197 = arguments.length;
var i__7158__auto___11198 = (0);
while(true){
if((i__7158__auto___11198 < len__7157__auto___11197)){
args11192.push((arguments[i__7158__auto___11198]));

var G__11199 = (i__7158__auto___11198 + (1));
i__7158__auto___11198 = G__11199;
continue;
} else {
}
break;
}

var G__11194 = args11192.length;
switch (G__11194) {
case 1:
return sawtooth.files.text_file_url_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.files.text_file_url_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11192.length)].join('')));

}
});

sawtooth.files.text_file_url_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (text){
return sawtooth.files.text_file_url_BANG_.call(null,text,null);
});

sawtooth.files.text_file_url_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (text,old_url){
var blob = (new Blob([text],(function (){var obj11196 = {"type":"text/plain"};
return obj11196;
})()));
if(cljs.core.truth_(old_url)){
window.URL.revokeObjectURL(old_url);
} else {
}

return window.URL.createObjectURL(blob);
});

sawtooth.files.text_file_url_BANG_.cljs$lang$maxFixedArity = 2;
