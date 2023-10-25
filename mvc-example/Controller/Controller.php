<?php

namespace Controller;

use Model\Model;

require_once 'Model/Model.php';

class Controller {

    public function index() {
        $model = new Model();
        $message = $model->getMessage();
        require_once 'View/view.php';
    }
}
