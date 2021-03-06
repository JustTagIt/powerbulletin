let s:cpo_save = &cpo
set cpo&vim

" Matchit support for Mustache & Handlebars
" extending HTML matchit groups
if exists("loaded_matchit") && exists("b:match_words")
  let b:match_words = b:match_words
  \ . ',{:},[:],(:),'
  \ . '\%({{\)\@<=#\s*\%(if\|unless\)\s*.\{-}}}'
  \ . ':'
  \ . '\%({{\)\@<=\s*else\s*}}'
  \ . ':'
  \ . '\%({{\)\@<=/\s*\%(if\|unless\)\s*}},'
  \ . '\%({{\)\@<=[#^]\s*\([-0-9a-zA-Z_?!/.]\+\).\{-}}}'
  \ . ':'
  \ . '\%({{\)\@<=/\s*\1\s*}}'
endif

if exists("g:mustache_abbreviations")
  inoremap <buffer> {{{ {{{}}}<left><left><left>
  inoremap <buffer> {{ {{}}<left><left>
  inoremap <buffer> {{! {{!}}<left><left>
  inoremap <buffer> {{< {{<}}<left><left>
  inoremap <buffer> {{> {{>}}<left><left>
  inoremap <buffer> {{# {{#}}<cr>{{/}}<up><left><left>
  inoremap <buffer> {{if {{#if }}<cr>{{/if}}<up><left>
  inoremap <buffer> {{ife {{#if }}<cr>{{else}}<cr>{{/if}}<up><up><left>
endif

let &cpo = s:cpo_save
unlet s:cpo_save

" vim: nofoldenable
