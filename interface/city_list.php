<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');

    // 连接数据库名称
    $mysql_conf = array(
        'host'    => '127.0.0.1', 
        'db'      => 'heilongjiang', 
        'db_user' => 'root', 
        'db_pwd'  => '', 
        );
    $mysqli = @new mysqli($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);
    //诊断连接错误
    if ($mysqli->connect_errno) {
        die("could not connect to the database:\n" . $mysqli->connect_error);
    }
    $mysqli->query("set names 'utf8';");
    //连接数据库
    $select_db = $mysqli->select_db($mysql_conf['db']);
    if (!$select_db) {
        die("could not connect to the db:\n" .  $mysqli->error);
    }
    function result($result){
        $arr = array();
        if ($result->num_rows > 0) {
            // 输出每行数据
            while($row = $result->fetch_assoc()) {
                $arr[] = $row;
            }
        } else {
            $arr = array('status' =>0 ,'msg' =>'该城市没有旅游资源' );
        }
        return $arr;
    }
    function row($result){
        $row = $result->fetch_array();
        return $row;
    }
    $city_id = $_POST['city_id'];
    $sql = "select * from scenery where city_id="."'$city_id'";
    $result = $mysqli->query($sql);
    $rs = result($result);
    echo json_encode($rs);
?>









