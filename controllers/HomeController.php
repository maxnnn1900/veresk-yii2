<?php

namespace app\controllers;

use yii\web\Controller;

class HomeController extends Controller
{
    public $layout = 'home';

    public function actions(): array
    {
        return [
            'index' => [
                'class' => 'app\actions\IndexAction',
            ],
        ];
    }
}