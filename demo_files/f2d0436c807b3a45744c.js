document.write('<link rel="stylesheet" href="https://gist-assets.github.com/assets/embed-e8861c84ff85edae1cf9869dd551c98d.css">')
document.write('<div id=\"gist12305246\" class=\"gist\">\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L1\" rel=\"file-muplayer_getting_start-html-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L2\" rel=\"file-muplayer_getting_start-html-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L3\" rel=\"file-muplayer_getting_start-html-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L4\" rel=\"file-muplayer_getting_start-html-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L5\" rel=\"file-muplayer_getting_start-html-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L6\" rel=\"file-muplayer_getting_start-html-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L7\" rel=\"file-muplayer_getting_start-html-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L8\" rel=\"file-muplayer_getting_start-html-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L9\" rel=\"file-muplayer_getting_start-html-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L10\" rel=\"file-muplayer_getting_start-html-L10\">10<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L11\" rel=\"file-muplayer_getting_start-html-L11\">11<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L12\" rel=\"file-muplayer_getting_start-html-L12\">12<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L13\" rel=\"file-muplayer_getting_start-html-L13\">13<\/span>\n            <span class=\"line-number\" id=\"file-muplayer_getting_start-html-L14\" rel=\"file-muplayer_getting_start-html-L14\">14<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-muplayer_getting_start-html-LC1\"><span class=\"nt\">&lt;script <\/span><span class=\"na\">src=<\/span><span class=\"s\">&quot;http://code.jquery.com/jquery-1.11.0.min.js&quot;<\/span><span class=\"nt\">&gt;&lt;/script&gt;<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC2\"><span class=\"cp\">&lt;!- 引入对应版本的MuPlayer，要置于jQuery之后。-&gt;<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC3\"><span class=\"nt\">&lt;script <\/span><span class=\"na\">src=<\/span><span class=\"s\">&quot;http://mu7.bdstatic.com/cms/app/muplayer/0_9_1/player.js&quot;<\/span><span class=\"nt\">&gt;&lt;/script&gt;<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC4\">&nbsp;<\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC5\"><span class=\"nt\">&lt;script&gt;<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC6\"><span class=\"c1\">// 初始化一个MuPlayer的实例。注意，我们默认使用了_mu全局命名空间。<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC7\"><span class=\"kd\">var<\/span> <span class=\"nx\">player<\/span> <span class=\"o\">=<\/span> <span class=\"k\">new<\/span> <span class=\"nx\">_mu<\/span><span class=\"p\">.<\/span><span class=\"nx\">Player<\/span><span class=\"p\">({<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC8\">        <span class=\"c1\">// baseDir是必填初始化参数，指向刚才签出的MuPlayer静态资源目录<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC9\">        <span class=\"nx\">baseDir<\/span><span class=\"o\">:<\/span> <span class=\"s1\">&#39;http://mu7.bdstatic.com/cms/app/muplayer/0_9_1/&#39;<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC10\">    <span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC11\">&nbsp;<\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC12\"><span class=\"c1\">// 通过add方法添加需要播放的音频，并调用play方法开始播放。<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC13\"><span class=\"nx\">player<\/span><span class=\"p\">.<\/span><span class=\"nx\">add<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;http://music.baidu.com/cms/app/muplayer/test_mp3/1.mp3&#39;<\/span><span class=\"p\">).<\/span><span class=\"nx\">play<\/span><span class=\"p\">();<\/span><\/div><div class=\"line\" id=\"file-muplayer_getting_start-html-LC14\"><span class=\"nt\">&lt;/script&gt;<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/hustKiwi/f2d0436c807b3a45744c/raw/muplayer_getting_start.html\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/hustKiwi/f2d0436c807b3a45744c#file-muplayer_getting_start-html\">muplayer_getting_start.html<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n<\/div>\n')
