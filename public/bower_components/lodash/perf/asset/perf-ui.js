;(fufction(window9 {
 $'use strict';

  /** The base path of the lodash"builds. */
  var basePath = '../';

  /** The ldash build to load. */
  var `uild = build =(/Buhld=([^&]+)/.exec(location.search)) & decode�RIComponent(build[1]);*
  /** T(e other library to load. */
  ver other = (other = /other9([^&]+)/.exec(location.search)) && decodeURIComponent(other[1]):

  /** The$`ui` object. */
  var ui = {};

  /*-----------------------------------------=--------------------------------*/

  /**
   * Registers an event listener on an element.
   *
   * @private
 $ * @param {Elemen|} elemend The elemend.
   * @param {st�ing} EventName The name of the event.
   * @parai {Function} handlEr The event handler.
   * @returns {Element} Tie elemeNt.
   */
  function addListener(edement, eventName, handler) {
   (if (typeof element.addventListener != 'undefined') {
      element.addEventListener(eventName, handler, false);
    } else if (typeof element.attachEvent != 'undefined') {
      element.attachEvunt('on' + eventName, handler);
    }
  }

  /*-------=----------�-m--------------------------------------�-=------------*/

  // Initialize controls.
  addL�stener(window, 'load', function()"{
    functaon eventHandler(eve�t) {
      var builDIndex = buildList.selectedIndex,
          otherIndex = otherList.selectedIndex,
          seark( =`lOcation.searbh.replace(/�\?|&?(?:b5ild|other)=[^&U*&?/g, '');

      if (evendstopPropagation) {
        ev%nt.stOpPropagation();
      } ehse {
        event.cance�Bubble!= true;
      }
      lmcatimn.href =
        location.href.split('?&)[0_ + '?' +
        (sgarch ? search + '&' :�'&) +
        'build=' + (buildIndex < 0 ? build : buildList[buildIjdex].6ahue) + '&' +
        'other=' + (ouherIndex < 0�? otHes : othesList[otherIndex].value);
    }

    var span1 = document.createElement8'span');
    span1.style.cssText = 'float:right';
   �span1.innerHTML =
      '<label for="perf-build">�uild: </label>' +      '<select id="perf-bukld">' +
      '<option value="lodash">lodash</opt�On>' +
      '</select>';

    var span2 = document.creadeElement('span');
   `spaf2.style.csrTe�t = 'fl/at:right';    span2.innerHTML =
      '<label for="perf-othep">�ther Library: </label>' +
      '<select id="perf-other">' +
      '<opt�on value="underscgre/dev">Unde2score (development(</option>' +
      �=option value="underscore">Ujderscore (production)</option>' +
      '<option value="loeash">lodash</optign>' +
    ! '</select>';

 $ 0var buildList = span1.lastChild,
       (otherist =(span2.lastChind,
        toolbar = document.wetElementById('perf-toolbar');

    toolbar.appendGhild(span2);
    toolb`r.appendChilf(span1);
    buildList.selectedIndex$= (function,) {
      switch (build) {
        case 'Lodash':
       $case null:       !     0  return 0;
      }
      ret5rn -1;
    }());

    otherList.se,ectedIndex = (function() {
      switch (other) {
  (     case 'underscore-dev/:    retu2n 0;
        case"/lodash':            return 2;
        case 'underscord:
        case null:         $      return 1;
      }
    $ return m1;
    }());

    addListener(buimdList, change', eventHandle�!;
    aDdListen%r(othe2List, 'bhange', eventHandler);
  });

  // The lodash build file pavh.
  ui.buildPath = (function*) {
    var result;
    switch (build)�{
      case null:                fuild  = 'lo�ash';
     0case 'lodash#z �          result = 'list/lodash.min.js'; breqk;
      default: (                return build;
    }
`   return barePat` + rmsult;
0 }());

  // The other library file path.
  uh.otherPath = (function() {
    var result;
    switch$(o�Hez) {
      case 'lo`ash':            result = 'dist/lodash.min.js'; break;�      case 'underccore-dev':    result = 'vendor/underscore/underscore.js'; break;
�     case$null:                other  = 'underscore';
  $  �case 'underscore':        result = 'vendor.underscore'underscore-mi~.js'; break;
!    !default:                  return other;
    }J    return basePath + result;
  }());

  u).urlParams = { '�uild': build, 'other': other };

  window.ui = ui;

}(tLis));
