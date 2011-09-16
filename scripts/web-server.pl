#!/usr/bin/env perl

use Mojolicious::Lite;

get '/' => sub {
  shift->redirect_to('/index.html');
};

# Set location for static files
app->static->root('app');

# Set cookie secret salt
app->secret('angular');

# Startup the webserver
app->start;


=pod

=head1 NAME

  web-server.pl - Perl Mojolicious webserver for the angular phonecat project

=head1 SYNOPSIS

  perl scripts\web-server.pl daemon --listen http://localhost:3333

=head1 PREREQS

You must install Perl and Mojolicious - http://mojolicio.us/

  cpan Mojolicious

=cut
