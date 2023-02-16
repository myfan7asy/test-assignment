from django.db import models


class Comment(models.Model):
    user = models.ForeignKey('auth.User')
    entry = models.ForeignKey('feed.Entry', related_name='comments')
    content = models.TextField(verbose_name='Comment')
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-date', )


class Bookmark(models.Model):
    user = models.ForeignKey('auth.User')
    feed = models.ForeignKey('feed.Feed', related_name='bookmarks', db_index=True)

    @staticmethod
    def get_bookmark(user, feed):
        return Bookmark.objects.filter(user=user, feed=feed).first()

    @staticmethod
    def user_has_bookmark(user, feed):
        return bool(Bookmark.get_bookmark(user, feed))
