webpackJsonp([0xcf7983c451ff],{1023:function(a,e){a.exports={data:{markdownRemark:{html:'<p>皆さんご無沙汰しております、まくです。</p>\n<p>さて、今月末～3 月頭を目途に、danmaq.com のブログシステムを WordPress から Jekyll に移行します！</p>\n<h2>danmaq.com、なぜブログ更新頻度が少ないのか？</h2>\n<p>私は当初ブログに書くような長文が苦手とか、Twitter とのすみ分けがイマイチとか、いろいろと理由を考えてみたのですが、<!-- more -->一番しっくりくる理由は、以下のようになりました。</p>\n<ul>\n<li><strong>編集のためにブラウザ開くのがめどい</strong></li>\n<li>WordPress のエディタが糞、というのもあるが、どちらかというと<strong>ブラウザのフォーム自体が糞</strong></li>\n<li>というか <strong>Markdown 使えない</strong>のが糞だし、Wordpressカスタマイズしすぎたせいか、Markdown 使えるプラグインが安定してくれない</li>\n<li>ほとんど自宅にいないためモバイル接続が非常に多く、回線が細い(平然と40kbpsくらいまで落ちる)ので WordPress のリッチな UI は割と辛い。ってか切断するのまじ勘弁</li>\n</ul>\n<p>そりゃボロボロでエンストしがちなワーゲン車に乗ってる横を、青い鳥がスイスイ気持ちよさそうに飛んでたら、そっちに行くわな、って話です。\n(最近 Twitter アプリすら開くの億劫になって、Siri にツイートさせてたりもする)</p>\n<p>というわけで、ブラウザを開かずに、vim とターミナルだけで編集して GitHub に記事をプッシュすると、サーバで侍っている Jenkins さんがフックして勝手に WordPress に投稿できたらいいな、とか考えてたら、こんな紹介戴いたので早速 Jekyll 使ってみたいぞ！と思った次第です。</p>\n<blockquote>\n<p><a href="https://twitter.com/danmaq">@danmaq</a> hexo とか jekyll が似たような仕組みだった気がするのですが、要件満たせ無さそうな感じです？</p>\n<p>— さい (@saigyojiyu) <a href="https://twitter.com/saigyojiyu/status/818766546700861441">2017年1月10日</a></p>\n</blockquote>\n<h2>Jekyll に移行したい理由</h2>\n<ul>\n<li>先述の通り、<code>git push</code> 一発で Jenkins → GitHub Pages と連携してブログを投稿できる</li>\n<li><strong>ブラウザなしで、vim とターミナルだけ</strong>で投稿できる！</li>\n<li>いっそのこと danmaq.com を GitHub Pages に移転してしまえば、レンタルサーバの中途半端な制約とオサラバできる</li>\n<li>WordPress と違って静的なページなので軽そう！(そいえばdanmaq.comは2011年まで静的ブログだったな……手動だけどな！)</li>\n<li>Markdown 標準対応だから編集めっちゃ楽だよ！</li>\n<li>WordPress よか Jekyll のほうが 7 年くらい新しいよ！</li>\n<li>弄り次第では SNS と連動した投稿もできそうな気がする！ (WordPress でもできるけど、弄りすぎて相性がゲフンゲフン)</li>\n</ul>\n<h2>Jekyll に移行したくない理由</h2>\n<ul>\n<li>導入の初期コスト。金はかからないけど WordPress を自前で入れる以上に技術が要る。</li>\n<li>呼び出されたらビルドする、みたいな Makefile 的なものを自前で用意する必要がある。<br>\n→ぶっちゃけ、最初だけが我慢すればおｋ！</li>\n</ul>\n<p>というわけで、今月下旬あたりからページが工事中になったりすることがありますが、ご理解ご容赦お願いします！</p>',frontmatter:{cover:{childImageSharp:{responsiveSizes:{src:"/danmaq.gatsby/static/2017-wp-to-jekyll-369dba5e803dac98b14f3166d0574dce-2fd78.png",srcSet:"/danmaq.gatsby/static/2017-wp-to-jekyll-369dba5e803dac98b14f3166d0574dce-739b5.png 200w,\n/danmaq.gatsby/static/2017-wp-to-jekyll-369dba5e803dac98b14f3166d0574dce-549e8.png 400w,\n/danmaq.gatsby/static/2017-wp-to-jekyll-369dba5e803dac98b14f3166d0574dce-2fd78.png 800w,\n/danmaq.gatsby/static/2017-wp-to-jekyll-369dba5e803dac98b14f3166d0574dce-5cf57.png 970w",sizes:"(max-width: 800px) 100vw, 800px"}}},date:"2017-02-09T22:19:26+09:00",strDate:"2017/2/9",redirect:null,title:"WordPress やめて Jekyll 始めます！",youtube:null},fields:{langKey:"ja",slug:"/ja/blog/2017/02/09-wordpress-to-jekyll/"}},site:{siteMetadata:{langKeyDefault:"ja",langs:["ja","en"]}}},pathContext:{path:"/ja/blog/2017/02/09-wordpress-to-jekyll/",langKey:"ja"}}}});
//# sourceMappingURL=path---ja-blog-2017-02-09-wordpress-to-jekyll-d2af421b8ef4550e5594.js.map