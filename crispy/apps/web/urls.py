"""crispy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib.auth.views import login as login_view, logout as logout_view
from django.views.generic.base import TemplateView

from . import views

urlpatterns = [
    url(r'^$', views.HomeView.as_view(), name="home"),

    # Auth
    url(r'^accounts/login/$', login_view, {'template_name': 'auth/login.html'}, name="login"),
    url(r'^accounts/logout/', logout_view, {'next_page': 'home'}, name="logout"),
    url(r'^accounts/register/$', views.RegisterView.as_view(), name="register"),

    # Feeds
    url(r'^feeds/new/$', views.NewFeedView.as_view(), name="new_feed"),
    url(r'^feeds/$', views.FeedListView.as_view(), name="feed_list"),
    url(r'^feeds/my/$', views.MyFeedListView.as_view(), name="my_feed_list"),
    url(r'^feeds/bookmarked/$', views.BookmarkedFeedsView.as_view(), name="bookmarked_feed_list"),
    url(r'^feeds/(?P<pk>[\d]+)$', views.FeedDetailView.as_view(), name="feed_detail"),
    url(r'^feeds/(?P<pk>[\d]+)/toggle-bookmark/$', views.ToggleBookmarkView.as_view(), name="toggle_feed_bookmark"),
    url(r'^feeds/(?P<pk>[\d]+)/update/$', views.FeedUpdateView.as_view(), name="feed_update"),
    url(r'^feeds/(?P<pk>[\d]+)/entry/$', views.EntryDetailView.as_view(), name="entry_detail"),
]
