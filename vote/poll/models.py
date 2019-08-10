from django.db import models

# Create your models here.

class Candidates(models.Model):

    id               = models.AutoField(primary_key=True)
    name             = models.CharField(max_length=100, default='Anonymous')
    votes            = models.PositiveIntegerField(default=0)

class Poll(models.Model):

    id               = models.AutoField(primary_key=True)
    code             = models.CharField(max_length=100, default='xxxxxxxx')
    candidates       = models.ManyToManyField(Candidates)
    startDate        = models.DateTimeField(auto_now=False)
    endDate          = models.DateTimeField(auto_now=False)

    def __unicode__(self):
        return self.id

    class Meta:
        ordering = ('id',)
        verbose_name = 'Poll'
        verbose_name_plural = 'Polls'

    def __str__(self):
        return str('{0} : {1}'.format(
            self.id,
            self.code))

class TempCandidatesTable(models.Model):

    id               = models.AutoField(primary_key=True)
    name             = models.CharField(max_length=100, default='Anonymous')
