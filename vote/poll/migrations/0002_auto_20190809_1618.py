# Generated by Django 2.2.4 on 2019-08-09 16:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('poll', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='candidates',
            old_name='candidate',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='tempcandidatestable',
            old_name='candidate',
            new_name='name',
        ),
    ]
