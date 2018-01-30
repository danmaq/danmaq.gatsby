webpackJsonp([0x796a081c0a28],{3587:function(e,a){e.exports={data:{markdownRemark:{html:"<pre><code class=\"language-Perl\">use HDML;\nmy $hdml = HDML->new;\nprint $hdml->hdml(\n　{ -version => '3.0', -public => 1, -markable => 'true' },\n　$hdml->display(\n　　{ -title => 'Test Card - 1' },\n　　$hdml->action({ -type => 'accept', -task => 'gosub', -dest => '#2' }),\n　　'FooFoo'\n　),\n　$hdml->choice(\n　　{ -name => '2' },\n　　$hdml->line('BazBazBazBazBazBaz', $hdml->wrap),\n　　\"Bar\\n\",\n　　$hdml->ce({ -value => 'one' }, '1'),\n　　$hdml->ce({ -value => 'two' }, '2'),\n　　$hdml->ce({ -value => 'three' }, '3')\n　)\n);\n</code></pre>\n<p>perlで動的にHDML(Handbeld Device Markup Language)を生成するモジュールです。</p>\n<p>まるでCGI.pmでHTMLを生成するような感覚で簡単にHDMLを作ることが出来ます。</p>\n<h2>ダウンロード</h2>\n<ul>\n<li>動作環境: perl 5.005以降(5.6.1以降を推奨)</li>\n<li>最終バージョン: 0.55(2002/2/26)</li>\n<li><a href=\"/filez/perl/HDML-0.55.ZIP\">ダウンロード</a> ([filesize]<a href=\"https://danmaq.com/filez/perl/HDML-0.55.ZIP%5B/filesize%5D\">https://danmaq.com/filez/perl/HDML-0.55.ZIP[/filesize]</a>)</li>\n</ul>",frontmatter:{cover:null,date:"2002-02-21T00:00:00+09:00",strDate:"2002/2/20",title:"HDML.pm - EZwebコンテンツを動的生成するモジュール"}}},pathContext:{path:"/ja/blog/2002/02/21-hdml/",langKey:"ja"}}}});
//# sourceMappingURL=path---ja-blog-2002-02-21-hdml-02abddc56a3d53951606.js.map