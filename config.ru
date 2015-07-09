use Rack::Static,
  :urls => ["/images", "/scripts", "/edge_includes","/index_edge.js","/index_edgeActions.js","/index_edgePreload.js"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
